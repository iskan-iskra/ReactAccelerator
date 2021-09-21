import React from 'react';
import Fonts from '../../Style/Fonts';
import Character from '../Character/Character';
import ButtonForward from '../UI/ButtonForward';
import Cl from './CharactersListComponent.module.scss'

const CharactersListComponent = ({List, withButtonForward, withTitle}) => {
    if(withButtonForward===undefined){
        withButtonForward=false
    }
    if(withTitle===undefined){
        withTitle=false
    }
    return (
        <div>
            {
                withTitle===true &&
                <div className={Cl.CharactersListTitle} style={Fonts.HeadLine6}>Персонажи</div>
            }
            <div className={Cl.CharactersList}>
                {   List &&
                    List.map((Pers)=>
                    <Character
                        key={Pers.id}
                        CharacterInfo={Pers}
                    >
                    {
                        withButtonForward===true &&
                        <ButtonForward/>
                    }    
                    </Character>
                )}
            </div>
        </div>
    );
};

export default CharactersListComponent;