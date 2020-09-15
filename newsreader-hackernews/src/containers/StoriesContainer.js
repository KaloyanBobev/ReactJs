import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import { GlobalStyle, StoriesConteinerWrapper } from '../styles/StoryContainerStyles';

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
        // getStory(24468338).then(data => console.log(data));
    }, []);

    return (
        <div>
            <GlobalStyle />
            <StoriesConteinerWrapper data-test-id="stories-container">
                <h1>Hacker News Stories</h1>
                {storyIds.map(storyId => (<Story key={storyId}
                    storyId={storyId} />
                ))}
            </StoriesConteinerWrapper>
        </div>

    )
}