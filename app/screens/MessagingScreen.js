// // MessagingScreen.js
// import React, { useEffect, useState } from 'react';
// import { View, FlatList, TextInput, Button, StyleSheet } from 'react-native';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import firebaseConfig from './firebaseConfig'; // Adjust path if necessary

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const MessagingScreen = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   useEffect(() => {
//     const unsubscribe = firebase.firestore()
//       .collection('messages')
//       .orderBy('timestamp', 'desc')
//       .onSnapshot(snapshot => {
//         const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setMessages(messages);
//       });
      
//     return () => unsubscribe();
//   }, []);

//   const handleSendMessage = async () => {
//     if (newMessage.trim() === '') return;

//     try {
//       await firebase.firestore().collection('messages').add({
//         text: newMessage,
//         senderId: firebase.auth().currentUser.uid,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//       });
//       setNewMessage('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         renderItem={({ item }) => (
//           <View style={styles.messageContainer}>
//             <Text>{item.text}</Text>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//         inverted // Show newest messages at the bottom
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Type your message..."
//           value={newMessage}
//           onChangeText={setNewMessage}
//           multiline
//         />
//         <Button title="Send" onPress={handleSendMessage} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//     padding: 20,
//   },
//   messageContainer: {
//     backgroundColor: '#F0F0F0',
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 10,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderTopWidth: 1,
//     borderTopColor: '#DDD',
//   },
//   input: {
//     flex: 1,
//     marginRight: 10,
//     borderWidth: 1,
//     borderColor: '#CCC',
//     borderRadius: 20,
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     maxHeight: 100,
//   },
// });

// export default MessagingScreen;
