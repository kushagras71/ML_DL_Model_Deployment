let mobilenet;
let model;
const webcam = new Webcam(document.getElementById('wc'));
const dataset = new RPSDataset();
var oneSamples=0, twoSamples=0, threeSamples=0, fourSamples=0, fiveSamples=0;
let isPredicting = false;

async function loadMobilenet() {
  const mobilenet = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_1.0_224/model.json');
  const layer = mobilenet.getLayer('conv_pw_13_relu');
  return tf.model({inputs: mobilenet.inputs, outputs: layer.output});
}

async function train() {
  dataset.ys = null;
  dataset.encodeLabels(5);

  model = tf.sequential({
    layers: [
        tf.layers.flatten({inputShape: mobilenet.outputs[0].shape.slice(1)}),
        tf.layers.dense({units: 120, activation:"relu"}),
        tf.layers.dense({units: 60, activation:"relu"}),
        tf.layers.dense({units: 5, activation:"softmax"})
    ]
  });

  const optimizer = tf.train.adam(0.0001);
    
  model.compile({optimizer: optimizer, loss:'categoricalCrossentropy',metrics:['accuracy']});
   


    
  let loss = 0;
  model.fit(dataset.xs, dataset.ys, {
    epochs: 20,
    callbacks: {
      onBatchEnd: async (batch, logs) => {
        loss = logs.loss.toFixed(5);
        accuracy = logs.acc.toFixed(5);
        console.log('LOSS: ' + loss + " Accuracy "+accuracy);
        }
      }
   });
}


function handleButton(elem){
	switch(elem.id){
		case "0":
			oneSamples++;
			document.getElementById("onesamples").innerText = "One Digit Images:" + oneSamples;
			break;
		case "1":
			twoSamples++;
			document.getElementById("twosamples").innerText = "Two Digit Images:" + twoSamples;
			break;
		case "2":
			threeSamples++;
			document.getElementById("threessamples").innerText = "Three Digit Images:" + threeSamples;
			break;  
		case "3":
			fourSamples++;
			document.getElementById("foursamples").innerText = "Four Digit Images:" + fourSamples;
			break;
        case "4":
            fiveSamples++;
            document.getElementById("fivesamples").innerText = "Five Digit Images:" + fiveSamples;
            break;

		
            
	}
	label = parseInt(elem.id);
	const img = webcam.capture();
	dataset.addExample(mobilenet.predict(img), label);

}

async function predict() {
  while (isPredicting) {
    const predictedClass = tf.tidy(() => {
      const img = webcam.capture();
      const activation = mobilenet.predict(img);
      const predictions = model.predict(activation);
      return predictions.as1D().argMax();
    });
    const classId = (await predictedClass.data())[0];
    var predictionText = "";
    switch(classId){
		case 0:
			predictionText = "I see One";
			break;
		case 1:
			predictionText = "I see Two";
			break;
		case 2:
			predictionText = "I see Three";
			break;
		case 3:
			predictionText = "I see Four";
			break;
        case 4:
            predictionText = "I see Five";
            break;

	
            
	}
	document.getElementById("prediction").innerText = predictionText;
			
    
    predictedClass.dispose();
    await tf.nextFrame();
  }
}


function doTraining(){
	train();
	alert("Training Started!")
}

function startPredicting(){
	isPredicting = true;
	predict();
    alert("Started making predictions")
}

function stopPredicting(){
	isPredicting = false;
	predict();
    alert("Stopped Predicting")
}


function saveModel(){
    model.save('downloads://my_model');
}


async function init(){
	await webcam.setup();
	mobilenet = await loadMobilenet();
	tf.tidy(() => mobilenet.predict(webcam.capture()));
		
}


init();