// @flow

import React, {useEffect, useState} from 'react';
import Tile from './Tile';
import IdeaTile from './IdeaTile';
import {deleteIdea, getIdeas, pushIdea, updateIdea} from '../apiClients';
import NewIdeaTile from './NewIdeaTile';
import TileContainer from './TitlesContainer';

export default function IdeaContainer() {
    const [ideas, setIdeas] = useState([]);
    const [isEmptyIdea, activateEmptyIdea] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const result = await getIdeas();
            setIdeas(result);
        }

        fetchData();
    }, []);

    return (
        <TileContainer>
            {ideas.map(i => (
                <Tile key={i.id}>
                    <IdeaTile
                        idea={i}
                        onDelete={() => {
                            deleteIdea(i).then(result => setIdeas(result));
                        }}
                        onChange={newIdea => {
                            updateIdea(newIdea).then(result => setIdeas(result));
                        }}
                    />
                </Tile>
            ))}
            {!isEmptyIdea && (
                <Tile onClick={() => activateEmptyIdea(true)}>
                    <NewIdeaTile />
                </Tile>
            )}
            {isEmptyIdea && (
                <Tile>
                    <IdeaTile
                        autoFocusTitle
                        onChange={newIdea => {
                            pushIdea(newIdea).then(result => setIdeas(result));
                            activateEmptyIdea(false);
                        }}
                        onCancel={() => activateEmptyIdea(false)}
                    />
                </Tile>
            )}
        </TileContainer>
    );
}
