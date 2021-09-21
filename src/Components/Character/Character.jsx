import React from 'react';
import { useHistory } from 'react-router';
import Fonts from '../../Style/Fonts';
import StatusAndGenderRender from '../Functions/InnerHTMLdataFunctions/StatusAndGenderRender';
import CharacterStatus from '../UI/CharacterStatus';
import Cl from './Character.module.scss'

const Character = ({children, ...props}) => {
    
    
    const History = useHistory()
    function OpenPage(){
        History.push("/Character/" + props.CharacterInfo.id)
    }


    let generalInfo = props.CharacterInfo.gender + "-"+ props.CharacterInfo.status
    generalInfo = StatusAndGenderRender(generalInfo)
    let genderInfo = generalInfo.gender
    let statusInfo = generalInfo.status
    let MoreInfo = props.CharacterInfo.race+", "+genderInfo+ " пол";

    const rootClassPhoto = [Cl.Photo]
    const rootClassCharacter = [Cl.Character]
    const rootClassInfo = [Cl.Info]
    if(props.viewType){
        rootClassCharacter.push(Cl.wrap)
        rootClassInfo.push(Cl.wrap)
        rootClassPhoto.push(Cl.wrap)
    }
    else{
        rootClassCharacter.push(Cl.column)
        rootClassInfo.push(Cl.column)
        rootClassPhoto.push(Cl.column)
    }


    return (
        <div onClick={OpenPage} className={rootClassCharacter.join(" ")}>
            <div className={rootClassPhoto.join(" ")}>
                <img src={props.CharacterInfo.imageName} alt={'фото '+props.CharacterInfo.name} />
            </div>
            <div className={rootClassInfo.join(" ")}>
                <CharacterStatus status={props.CharacterInfo.status}>{statusInfo}</CharacterStatus>
                <div className={Cl.Name} style={Fonts.Title}>{props.CharacterInfo.fullName}</div>
                <div className={Cl.Type} style={Fonts.Caption}>{MoreInfo}</div>
            </div>
            {children}
        </div>
    );
};

export default Character;