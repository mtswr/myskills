import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native';

export function Home() {
    // conceitos de imutabilidade
    // primeira posição é o estado, segunda posição é a função que atualiza o estado

    //novas habilidades
    const [newSkill, setNewSkill] = useState('');

    // coleção das habilidades
    const [mySkills, setMySkills] = useState([]);

    // handle é uma convenção de quando a função é disparada por uma interação do usuario 
    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Matheus</Text>
            <TextInput
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={handleAddNewSkill}
            >
                <Text style={styles.buttonText}>
                    Add
                </Text>
            </TouchableOpacity>

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skill
            </Text>
            
            {
                mySkills.map(skill => (
                <TouchableOpacity key={skill}style={styles.buttonSkill}>
                    <Text style={styles.textSkill}>
                        {skill}
                    </Text>
                </TouchableOpacity>
                ))
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1F1E25',
        fontSize: 18,
        color: '#fff',
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10,
    },
    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',    
    }
})