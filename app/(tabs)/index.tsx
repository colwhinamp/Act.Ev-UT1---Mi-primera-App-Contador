//Andrés Mauricio Peña
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// la meta es 10
const GOAL = 10;

// componente principal de la app
export default function App(){
  // el estado que guarda el número del contador
  const [count, setCount] = useState(0);

  // función para sumar 1
  const handleIncrement = () => {
    setCount(prevCount=> prevCount+ 1);
  };

  // función para restar 1
  const handleDecrement = () => {
    setCount(prevCount=> Math.max(0,prevCount - 1));
  };

  // función para volver a 0
  const handleReset =() => {
    setCount(0);
  };

  // mensaje que cambia si se llega a la meta
  const statusMessage = count >= GOAL
    ? 'meta alcanzada'
    : `faltan ${GOAL - count}`;

  return (
    <View style={styles.container}>
      {/* titulo */}
      <Text style={styles.title}>contador</Text>

      {/* mensaje de estado */}
      <View style={styles.statusBox}>
        <Text style={styles.statusText}>{statusMessage}</Text>
      </View>

      {/* el valor del contador */}
      <Text style={styles.counterText}>{count}</Text>

      {/* botones de + y - */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleDecrement}
          disabled={count === 0} // deshabilitar si es cero
        >
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleIncrement}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* boton de reset */}
      <TouchableOpacity
          style={[styles.resetButton, count === 0 && styles.resetButtonDisabled]}
          onPress={handleReset}
          disabled={count === 0}
      >
        <Text style={styles.resetButtonText}>reiniciar</Text>
      </TouchableOpacity>

    </View>
  );
}

// estilos de la app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  statusBox: {
    padding: 8,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#eee',
  },
  statusText: {
    fontSize: 16,
    color: '#333',
  },
  counterText: {
    fontSize: 100,
    fontWeight: '200',
    color: '#000',
    marginBottom: 40,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 8,
    minWidth: 100,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  resetButtonDisabled: {
    backgroundColor: '#ccc',
  }
});