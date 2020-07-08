# Fashion MNIST Classifier.

The TensorFlow model was built in JavaScript and whenever this script is executed i.e. the webpage is accessed or it is refreshed, 
the model start it training using the built-in Fashion-MNIST dataset in the browser itself.

<img src="https://github.com/kushagras71/ML_DL_Model_Deployment/blob/master/Tensorflow_Models/Fashion_MNIST_WEB/ouput_images/Fashion_MNIST_Classifier_1.png" width=900 height=400>

During training of the model the webpage displays the graph which shows the process of optimizing the weights in order to reduce the loss. The user can thus get a feel of the 
training process. Once the training is completed a prompt shows up telling that the model is trained and then you can use it to make classifications or predictions.

After training and making a classification the webpages looks somewhat as follows:

<img src="https://github.com/kushagras71/ML_DL_Model_Deployment/blob/master/Tensorflow_Models/Fashion_MNIST_WEB/ouput_images/Fashion_MNIST_Classifier_2.png" width=900 height=400>

In the black box the user can draw any fashion items ( provided it from the 10 classes in the dataset) and hit classify to check what the model predicts. Remember there might some
wrong predictions because the model's training time is small and takes place on everytime the webpage is refreshed. Shorter training time means less accuracy. 
Moreover the model built for training is pretty simple in-order to have a limited training time.
But if the drawing is clear and is in the center of the box
then the model must give the 
right prediction.

Here, the box has a drawing of a 'T-shirt', and
the model made the correct prediction as 'T-shirt'.
