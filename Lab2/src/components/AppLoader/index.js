import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import * as database from '../../database'
import { useDispatch } from 'react-redux';
import { setAllTasks } from '../../Redux/taskSlice';


export default function AppLoader() {

    const dispatch = useDispatch()

    //The code inside useEffect loads the code only once when the app is rendered. 

    useEffect(() => {
        //IIFE 
        (async () => {
            const data = await database.load()
            console.log(data)
            dispatch(setAllTasks(data)) //Pass the data to Redux store 
        })()

    }, [])


}