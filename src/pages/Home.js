import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, Platform } from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

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

            <Button onPress={handleAddNewSkill}/>

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skill
            </Text>
            
            {
                mySkills.map(skill => (
                    <SkillCard skill={skill}/>
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
})