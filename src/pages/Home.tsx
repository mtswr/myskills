import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, TextInput, Platform, FlatList } from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id: string;
    name: string;
}


export function Home() {
    // conceitos de imutabilidade
    // primeira posição é o estado, segunda posição é a função que atualiza o estado

    //novas habilidades
    const [newSkill, setNewSkill] = useState('');

    // coleção das habilidades
    const [mySkills, setMySkills] = useState<SkillData[]>([]);


    const [greetings, setGreeting] = useState('');

    // handle é uma convenção de quando a função é disparada por uma interação do usuario 
    function handleAddNewSkill() {

        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string) {
        setMySkills(oldState => oldState.filter(
            skill => skill.id !== id
        ))
    }

    useEffect(() => {
        const currenthour = new Date().getHours();

        if (currenthour < 12) {
            setGreeting('Good morning');
        } else if (currenthour >= 12 && currenthour < 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good night');
        }
    })

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Welcome, Matheus</Text>


            <Text style={styles.greetings}>
                {greetings}
            </Text>


            <TextInput
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button title="Add" onPress={handleAddNewSkill} />

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skill
            </Text>


            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard
                        skill={item.name}
                        onPress={() => handleRemoveSkill(item.id)}
                    />
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
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
    greetings: {
        color: '#fff'
    }
})