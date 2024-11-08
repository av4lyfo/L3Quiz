import react, {useState} from 'react'
import {View, Text, TextInput, Image, StyleSheet, ScrollView, Alert, Button, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import RNPickerSelect from 'react-native-picker-select';


const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText}/>
        </View>
    );
};



const QuizApp = () => {
    const [user, setUser] = useState('');
    const [answers, setAnswers] = useState({ AnsQ1: '', AnsQ2: '', AnsQ3: '', AnsQ4: '', AnsQ5: '' });

    const correctAnswers = {
        AnsQ1: 'Porsche',
        AnsQ2: 'Renault',
        AnsQ3: 'Citroen',
        AnsQ4: 'Bmw',
        AnsQ5: 'Ferrari',
    };

    const handleSubmit = () => {
        let score = 0;
        Object.keys(correctAnswers).forEach((key) => {
            if (answers[key] === correctAnswers[key]) {
                score += 1;
            }
        });

        let feedback;
        if (score === 5) {
            feedback = `Well done, ${user}!`;
        } else if (score >= 3) {
            feedback = `Good job, ${user}!`;
        } else {
            feedback = `You can do better next time, ${user}.`;
        }

        Alert.alert(`Your Score: ${score}`, feedback);
    };

return(
    <ScrollView style={styles.Container} scrollEventThrottle={5} overScrollMode="never">
        <Text></Text>
        <Text></Text>
        <View style={styles.headerContainer}>
            <Icon name="car" size={24} style={styles.icon} />
            <Text style={styles.header}>Car Quiz</Text>
            <Icon name="car" size={24} style={styles.icon} />
        </View>
        <Text></Text>
        <View /*styles={styles.UserNameContainer}*/>
        <InputBox label="User Name:" onChangeText={(text) => setUser(text)}/>
        <Text></Text>
        <Text>Hello, {user}</Text>
        <Text></Text>
        </View>

        <View style={styles.questionContainer}>
        <Text>Q1) What car is this?</Text>
        <Image source={require('./img/Porsche.jpg')} style={styles.image} />
        <Text>Answer:</Text>
        <RNPickerSelect
            onValueChange={(value) => setAnswers({ ...answers, AnsQ1: value })}
            items={[
                { label: 'Porsche', value: 'Porsche' },
                { label: 'Lotus', value: 'Lotus' },
                { label: 'Lexus', value: 'Lexus' }]}
            style={{
                placeholder: {
                    color: '#2c3fe6', // Another way to set the color
                }
            }}
        />
        </View>
        <View style={styles.questionContainer}>
        <Text>Q2) What car is this?</Text>
        <Image source={require('./img/Renault.jpg')} style={styles.image} />
        <Text>Answer:</Text>
        <RNPickerSelect
            onValueChange={(value) => setAnswers({ ...answers, AnsQ2: value })}
            items={[
                { label: 'Renault', value: 'Renault' },
                { label: 'Hyundai', value: 'Hyundai' },
                { label: 'Bmw', value: 'Bmw' }]}
            style={{
                placeholder: {
                    color: '#2c3fe6', // Another way to set the color
                }
            }}
        />
        </View>

        <View style={styles.questionContainer}>
        <Text>Q3) What car is this?</Text>
        <Image source={require('./img/Citoren.jpg')} style={styles.image} />
        <Text>Answer:</Text>
        <RNPickerSelect
            onValueChange={(value) => setAnswers({ ...answers, AnsQ3: value })}
            items={[
                { label: 'Citroen', value: 'Citroen' },
                { label: 'Lotus', value: 'Lotus' },
                { label: 'Toyota', value: 'Toyota' }]}
            style={{
                placeholder: {
                    color: '#2c3fe6', // Another way to set the color
                }
            }}
        />
        </View>

        <View style={styles.questionContainer}>
        <Text>Q4) What car is this?</Text>
        <Image source={require('./img/Bmw.jpg')} style={styles.image} />
        <Text>Answer:</Text>
        <RNPickerSelect
            onValueChange={(value) => setAnswers({ ...answers, AnsQ4: value })}
            items={[
                { label: 'Porsche', value: 'Porsche' },
                { label: 'Lotus', value: 'Lotus' },
                { label: 'Bmw', value: 'Bmw' }]}
            style={{
                placeholder: {
                    color: '#2c3fe6', // Another way to set the color
                }
            }}
        />
        </View>

        <View style={styles.questionContainer}>
        <Text>Q5) What car is this?</Text>
        <Image source={require('./img/Ferrari.jpg')} style={styles.image} />
        <Text>Answer:</Text>
        <RNPickerSelect
            onValueChange={(value) => setAnswers({ ...answers, AnsQ5: value })}
            items={[
                { label: 'Porsche', value: 'Porsche' },
                { label: 'Lamborghini', value: 'Lamborghini' },
                { label: 'Ferrari', value: 'Ferrari' } ]}
            style={{
                placeholder: {
                    color: '#2c3fe6', // Another way to set the color
                }
            }}
        />
        </View>

        <Text></Text>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        <Text></Text>
        <Text></Text>
    </ScrollView>
);

};

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#c0c8f6',
        borderRadius: 10,
        padding: 20,
    },

    header: {
        fontSize: 28,
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 10

    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor:'#a1a8ef',
        borderRadius: 20,
        alignSelf: 'center',
        padding: 10,


    },
    icon: {
        color: '#5769f4',
    },
    image: {
        width: '100%',
        height: 300,
        marginVertical: 10,
        borderColor:'#a1a8ef',
        borderRadius:20


    },
    questionContainer: {
        marginVertical: 15,
        padding:15,
        backgroundColor:'#a1a8ef',
        borderRadius: 20,
    },
    // UserNameContainer:{
    //     backgroundColor: '#a1a8ef',
    //     borderRadius: 20,
    //     padding: 10,
    //
    // }
    submitButton: {
        backgroundColor: '#a1a8ef',
        paddingVertical: 15,
        borderRadius: 20,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});



export default QuizApp
