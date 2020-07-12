Hand Digit Recognition.
=
The model here is a classification model build using Transfer Learning. MobileNet (https://www.tensorflow.org/api_docs/python/tf/keras/applications/MobileNet) is the pre-trained model used for the extracting the feature from the input images and
the dense layers for classification were hard coded in the index.js file.

The working is pretty straight forward. Whenever the webpage is accessed, the webcam on the system starts running (click "Allow" if prompted). When the webcam is running
the user can use his/her hand to represent any number between 1 to 5 and click on the appropriate button related to the number. Suppose the hand shows number "3" then the user must click on the button with "Three" on it. Everytime a button with "One","Two", etc is clicked a frame from the webcam is snapshotted by the webpage and stored with the same label as of button clicked, in the background as part of the dataset. The labelling must be done correctly or else the model would give wrong since wrong data would be fed to it from training. Number of images fed to the network depends on the user. After all the images are collected hit "Train Network" button to start training.

After feeding the images and before starting the training processes the webpage would look something like this:

<img src="https://github.com/kushagras71/ML_DL_Model_Deployment/blob/master/Tensorflow_Models/Hand_Number_Recognition/images/feeding_images.png" width=800 height=350>

Here 30 images of each class are clicked. If you want to seen the training open the Developer Tools on the webpage and then click on console.

The training would take around 5 to 10 mins. Checking the Console of the webpage would be a good way to look at the progressof the model.

After training click on "Start Predicting" to let the model make predictions. The predictions will be live i.e. the model will continuously classify whatever it see 
through the webcam. A statement like "I see Five" lets us know that anything that is present at that instance of time in front of the webcam, the model classifies it as "Five".
You can check the working by just bringing any number's hand representation in front of the camera and model would predict what the hand represents. Some predictions might be wrong, for example when a little different representation is seen by the model or the surroundings have changed or any other major changes are faced by the model. The preformance of the model would increase with more number of images and with different positioning on the frame of the webcam.

Some sample predictions made by the model based on the 30 images per class are as follows:
( You can we see the training process on the right side in the Developer Tools panel. )

<img src="https://github.com/kushagras71/ML_DL_Model_Deployment/blob/master/Tensorflow_Models/Hand_Number_Recognition/images/first_pred_after_training.png" width=800 height=350>

<img src="https://github.com/kushagras71/ML_DL_Model_Deployment/blob/master/Tensorflow_Models/Hand_Number_Recognition/images/second_pred_after_training.png" width=800 height=350>

<img src="https://github.com/kushagras71/ML_DL_Model_Deployment/blob/master/Tensorflow_Models/Hand_Number_Recognition/images/third_pred_after_training.png" width=800 height=350>


Click on "Stop Predicting" when you are done working with the model.

The user can download the trained model by clicking on download button. It is not shown in the screenshots but you can find it by scrolling down.
