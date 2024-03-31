import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Modal, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Draggable from 'react-native-draggable';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); //Crear Ventanas

//Pantalla De Inicio
function PantallaPrincipal({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    //Establecer imagen de fondo
    <ImageBackground source={require('./imagenes/fondo2.png')} style={styles.background}> 
      <View style={styles.container}>
        <Button
          title="ESTUDIANTE"
          onPress={() => navigation.navigate('MenuEstudiante')} //Ir a otra ventana
          buttonStyle={styles.customButton}
          titleStyle={styles.customButtonText}
        />
        <Button
          title="PADRE / TUTOR"
          onPress={() => navigation.navigate('MenuTutor')}
          buttonStyle={styles.customButton}
          titleStyle={styles.customButtonText}
        />
        <View style={styles.userButtonContainer}>
          <Button
            type="clear"
            icon={
              <Icon
                name='user'
                type='font-awesome'
                color='#9966CC'
                size={30}
              />
            }
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Inicio de Sesión</Text>
            <TextInput
              style={styles.input}
              placeholder="Correo"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Button title="Cerrar" onPress={() => setModalVisible(false)} 
              buttonStyle={styles.lgButton}
              titleStyle={styles.customButtonText}
            />
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}
//Menu Estudiante
function MenuEstudiante({ navigation }) {
  return (
    <ImageBackground source={require('./imagenes/fondoM.png')} style={styles.background}>
      <View style={styles.container}>
        <Button
          title="Jugar"
          onPress={() => navigation.navigate('Niveles')}
          buttonStyle={styles.customButton}
          titleStyle={styles.customButtonText}
        />
        <Button
          title="Practicar"
          onPress={() => navigation.navigate('Practicar')}
          buttonStyle={styles.customButton}
          titleStyle={styles.customButtonText}
        />
      </View>
      <View style={styles.userButtonContainer}>
          <Button
            type="clear"
            icon={
              <Icon
                name='home'
                type='font-awesome'
                color='#9966CC'
                size={30}
              />
            }
            onPress={() => navigation.navigate('PantallaPrincipal')}
          />
        </View>
    </ImageBackground>
  );
}

function MenuTutor({ navigation }) {
  return (
    <ImageBackground source={require('./imagenes/fondoM.png')} style={styles.background}>
      <View style={styles.container}>
        <Button
          title="PROGRESO"
          onPress={() => navigation.navigate('Progreso')}
          buttonStyle={styles.customButton}
          titleStyle={styles.customButtonText}
        />
        <Button
          title="CONFIGURAR"
          onPress={() => navigation.navigate('Configurar')}
          buttonStyle={styles.customButton}
          titleStyle={styles.customButtonText}
        />
      </View>
      <View style={styles.userButtonContainer}>
          <Button
            type="clear"
            icon={
              <Icon
                name='home'
                type='font-awesome'
                color='#9966CC'
                size={30}
              />
            }
            onPress={() => navigation.navigate('PantallaPrincipal')}
          />
        </View>
    </ImageBackground>
  );
}

function Progreso({ navigation }) {
  return (
    <ImageBackground source={require('./imagenes/fondoS.png')} style={styles.background}>
      <View style={styles.container3}>
        <Button
          title="Salir"
          onPress={() => navigation.navigate('PantallaPrincipal')}
          buttonStyle={styles.mpButtons}
          titleStyle={styles.customButtonText2}
        />
      </View>
    </ImageBackground>
  );
}

function Configurar({ navigation }) {
  return (
    <ImageBackground source={require('./imagenes/fondoS.png')} style={styles.background}>
      <View style={styles.container3}>
        <Button
          title="Salir"
          onPress={() => navigation.navigate('PantallaPrincipal')}
          buttonStyle={styles.mpButtons}
          titleStyle={styles.customButtonText2}
        />
      </View>
    </ImageBackground>
  );
}

function Practicar({ navigation }) {
  return (
    <ImageBackground source={require('./imagenes/fondoS.png')} style={styles.background}>
      <View style={styles.container3}>
        <Button
          title="Salir"
          onPress={() => navigation.navigate('MenuEstudiante')}
          buttonStyle={styles.mpButtons}
          titleStyle={styles.customButtonText2}
        />
      </View>
    </ImageBackground>
  );
}

function Niveles({ navigation }) {
  return (
    <ImageBackground source={require('./imagenes/fondoN.png')} style={styles.background}>
      <View style={styles.container3}>
        <Button
          title="Salir"
          onPress={() => navigation.navigate('MenuEstudiante')}
          buttonStyle={styles.mpButtons}
          titleStyle={styles.customButtonText2}
        />
      </View>
      <View style={styles.levelsContainer}>
      <View style={styles.levelsRow}>
        <Button
          title="1"
          onPress={() => navigation.navigate('Juego')}
          buttonStyle={styles.levelButton}
          titleStyle={styles.levelButtonText}
        />
        <TouchableOpacity style={styles.levelButton}>
          <Text style={styles.levelButtonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.levelButton}>
          <Text style={styles.levelButtonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.levelButton}>
          <Text style={styles.levelButtonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.levelButton}>
          <Text style={styles.levelButtonText}>5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.levelsRow}>
        <TouchableOpacity style={styles.levelButton}>
          <Text style={styles.levelButtonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.levelButton}>
          <Text style={styles.levelButtonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.levelButton}>
          <Text style={styles.levelButtonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.levelButton}>
          <Text style={styles.levelButtonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.levelButton}>
          <Text style={styles.levelButtonText}>10</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
}


function Juego({ navigation }) {
  //Establecer posicion de las palabras en español
  const initialWordPositions = [
    { x: 20, y: 10, word: 'Manzana', color: 'black' },
    { x: 120, y: 10, word: 'Plátano', color: 'black' },
    { x: 220, y: 10, word: 'Sandía', color: 'black' },
    { x: 310, y: 10, word: 'Cereza', color: 'black' },
  ];

  const [wordPositions, setWordPositions] = useState(initialWordPositions);
  const [instructionsVisible, setInstructionsVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [timer, setTimer] = useState(30); //Establecer tiempo para el temporizador
  const [paused, setPaused] = useState(false);

  //Obtener nueva posicion de las palabras
  const onDragRelease = (index, _, position) => {
    const newPosition = { x: position.x, y: position.y };
    const updatedWordPositions = wordPositions.map((item, i) =>
      i === index ? { ...item, ...newPosition } : item
    );
    setWordPositions(updatedWordPositions);
    checkCollision(index, position);
  };

  //Comparar posicion de las palabras e imagenes
  const checkCollision = (index, position) => {
    const imagePositions = [
      { x: 10, y: -50, width: 180, height: 180 },  // Manzana
      { x: 190, y: -250, width: 180, height: 180 }, // Plátano
      { x: -5, y: 155, width: 180, height: 180 }, // Sandía
      { x: -187, y: -45, width: 180, height: 180 }, // Cereza
    ];

    const collisionDetected = imagePositions.some(imagePosition =>
      checkCollisionHelper(position, imagePosition)
    );

    const newWordPositions = wordPositions.map((item, i) => ({
      ...item,
      color: i === index && collisionDetected ? 'green' : 'black'
    }));
    setWordPositions(newWordPositions);
  };

  const checkCollisionHelper = (wordPosition, imagePosition) => {
    return (
      wordPosition.x >= imagePosition.x &&
      wordPosition.x <= imagePosition.x + imagePosition.width &&
      wordPosition.y >= imagePosition.y &&
      wordPosition.y <= imagePosition.y + imagePosition.height
    );
  };

  const resetWordPositions = () => {
    setWordPositions(initialWordPositions);
  };

  //Ocultar Banner de Instrucciones
  const hideInstructions = () => {
    setInstructionsVisible(false);
  };

  //Temporizador
  useEffect(() => {
    let interval;
    if (!paused) {
      interval = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          clearInterval(interval);
          setModalVisible(true);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer, paused]);

  const closeModal = () => {
    setModalVisible(false);
  };

  const resetTimer = () => {
    setTimer(30);
  };

  const togglePause = () => {
    setPaused(!paused);
  };
  
  return (
    <ImageBackground source={require('./imagenes/fondoP.png')} style={styles.background}> 

      {/*Banner de Intrucciones*/}
      {instructionsVisible && (
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsText}>Arrastra las palabras hacia las imágenes correspondientes.</Text>
          <TouchableOpacity onPress={hideInstructions}>
            <Text style={styles.hideInstructionsText}>Ocultar</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Modal, Ventana emergente que aparece cuando se supera el nivel */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Se ejecuta cuando se intenta cerrar el moda
          setModalVisible(false);
        }}
      >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>¡Bien hecho!</Text>
          <Text style={styles.modalText}>¡Aprendiste 4 palabras en inglés!</Text>
          <Text style={styles.modalText}>Ganaste 5 estrellas</Text>
          {/* Imagenes de estrellas de recompensa */}
          <View style={styles.imageRow}>
            <Image source={require('./imagenes/estrellaP.png')} style={styles.modalImage} />
            <Image source={require('./imagenes/estrellaP.png')} style={styles.modalImage} />
            <Image source={require('./imagenes/estrellaP.png')} style={styles.modalImage} />
            <Image source={require('./imagenes/estrellaP.png')} style={styles.modalImage} />
            <Image source={require('./imagenes/estrellaP.png')} style={styles.modalImage} />
          </View>
          <Text style={styles.modalText}>Continua en el siguiente nivel para</Text>
          <Text style={styles.modalText}>aprender más</Text>
          <TouchableOpacity onPress={closeModal}>
            <Text style={styles.closeButton}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
      </Modal>

      {/* Temporizador */}
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>Tiempo restante: {timer} seg</Text>
      </View>

      {/* Menu de botones */} 
      <View style={styles.container2}>
        <Button
          title={paused ? "Continuar" : "Pausa"}
          onPress={togglePause}
          buttonStyle={styles.mpButtons}
          titleStyle={styles.customButtonText2}
        />
        <Button
          title="Reiniciar"
          onPress={()=> {
            resetWordPositions(), 
            resetTimer()} }
          buttonStyle={styles.mpButtons}
          titleStyle={styles.customButtonText2}
        />
        <Button
          title="Configurar"
          onPress={() => navigation.navigate('Configurar')}
          buttonStyle={styles.mpButtons}
          titleStyle={styles.customButtonText2}
        />
        <Button
          title="Salir"
          onPress={() => navigation.navigate('Niveles')}
          buttonStyle={styles.mpButtons}
          titleStyle={styles.customButtonText2}
        />
      </View>

      {/* Imagenes en Ingles */}
      <View style={styles.imageContainer}>
        <View style={styles.imageColumn}>
          <Image source={require('./imagenes/manzana.jpeg')} style={[styles.image, { left: 10, top: -50 }]} />
          <Image source={require('./imagenes/platano.jpeg')} style={[styles.image, { left: 190, top: -250 }]} />
        </View>
        <View style={styles.imageColumn}>
          <Image source={require('./imagenes/sandia.jpeg')} style={[styles.image, { left: -5, top: 155 }]} />
          <Image source={require('./imagenes/cereza.jpeg')} style={[styles.image, { left: -187, top: -45 }]} />
        </View>
      </View>

      {/* Palabras arrastrables */}
      <View style={styles.draggableContainer}>
        {wordPositions.map((wordPosition, index) => (
         <Draggable
         key={index}
         x={wordPosition.x}
         y={wordPosition.y}
         onDragRelease={(gestureState, position) => onDragRelease(index, gestureState, position)}
       >
         <Button title={wordPosition.word} buttonStyle={{ backgroundColor: wordPosition.color }} />
       </Draggable>
        ))}
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1, //Usar toda la pantalla
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  container3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 720,
  },
  //Botones pantalla de inicio
  customButton: { 
    backgroundColor: '#9966CC',
    borderRadius: 40,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginVertical: 10,
  },
  customButtonText: {
    fontFamily: 'georgia',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  customButtonText2: {
    fontFamily: 'georgia',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  //Botones menu estudante/tutor
  mpButtons: {
    backgroundColor: '#FF914D',
    borderRadius: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 0,
    width: 95,
    height: 30,
  },
  userButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  //Boton Login/Home
  lgButton: {
    backgroundColor: '#9966CC',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 0,
    width: 95,
    height: 40,
  },
  //Ventana Login
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'rgba(153, 153, 204, 0.9)',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 0,
    padding: 10,
    fontFamily: 'georgia',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  //Palabras
  draggableContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  //Imagenes en Ingles
  image: {
    top: -65, // Ajustar este valor según sea necesario
    left: 0, // Ajustar este valor según sea necesario
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Espacio entre las filas de imágenes
  },
  imageColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //Banner de Instrucciones
  instructionsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    alignItems: 'center',
  },
  instructionsText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hideInstructionsText: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  //Ventana emergente de nivel superado
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semitransparente
  },
  modalContent: {
    backgroundColor: '#FBF2FE',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontFamily: 'georgia',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    fontSize: 18,
    fontFamily: 'georgia',
    fontWeight: 'bold',
    color: '#C300FF',
  },
  modalImage: {
    width: 50,
    height: 50,
    marginVertical: 5,
  },
  imageRow: {
    flexDirection: 'row',
  },
  //Temporizador
  timerContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  timerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  //Botones de Niveles
  levelsContainer: {
    flex: 1, // Hacer que el contenedor ocupe todo el espacio disponible
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingHorizontal: 20,
    marginTop: -1150,
  },
  levelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  levelButton: {
    width: 60,
    height: 60,
    backgroundColor: '#C882F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  levelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
 
});

function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="PantallaPrincipal">
       <Stack.Screen 
          name="PantallaPrincipal" 
          component={PantallaPrincipal} 
          options={{
            headerShown: false // Oculta el encabezado en esta pantalla
          }}
        />
        <Stack.Screen
           name="MenuEstudiante" 
           component={MenuEstudiante} 
           options={{
            headerShown: false
           }}
        />
        <Stack.Screen 
          name="MenuTutor" 
          component={MenuTutor} 
          options={{
            headerShown: false // Oculta el encabezado en esta pantalla
          }}
        />
        <Stack.Screen 
           name="Niveles" 
           component={Niveles} 
           options={{
            headerShown: false
           }}
        />
        <Stack.Screen 
           name="Juego" 
           component={Juego} 
           options={{
            headerShown: false
           }}
        />
        <Stack.Screen 
           name="Progreso" 
           component={Progreso} 
           options={{
            headerShown: false
           }}
        />
       <Stack.Screen 
           name="Configurar" 
           component={Configurar} 
           options={{
            headerShown: false
           }}
        />
      <Stack.Screen 
           name="Practicar" 
           component={Practicar} 
           options={{
            headerShown: false
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;