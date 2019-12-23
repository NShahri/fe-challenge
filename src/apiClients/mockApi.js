// @flow

export type Idea = {|
    id: number,
    create_date: number,
    title: string,
    body: string,
|};

let ideas = [
    {
        id: 1,
        create_date: Date.now(),
        title: 'idea 1',
        body: 'body 1',
    },
    {
        id: 2,
        create_date: Date.now(),
        title: 'idea 2 - sometextsometextsometextsometextsometextsometextsometextsometext',
        body: 'body 2 - sometextsometextsometextsometextsometextsometextsometext',
    },
    {
        id: 3,
        create_date: Date.now(),
        title: 'idea 3 - sometextsometextsometextsometextsometextsometextsometextsometext',
        body: 'body 3 - sometextsometextsometextsometextsometextsometextsometext',
    },
    {
        id: 4,
        create_date: Date.now(),
        title: 'idea 4 - sometextsometextsometextsometextsometextsometextsometextsometext',
        body: 'body 4 - sometextsometextsometextsometextsometextsometextsometext',
    },
    {
        id: 5,
        create_date: Date.now(),
        title: 'idea 5 - sometextsometextsometextsometextsometextsometextsometextsometext',
        body: 'body 5 - sometextsometextsometextsometextsometextsometextsometext',
    },
    {
        id: 6,
        create_date: Date.now(),
        title: 'idea 6 - sometextsometextsometextsometextsometextsometextsometextsometext',
        body: 'body 6 - sometextsometextsometextsometextsometextsometextsometext',
    },
];

export async function getIdeas(): Promise<Idea[]> {
    console.log('Mock api client has been called to get list of ideas', ideas);
    return ideas;
}

export async function pushIdea(idea: Idea): Promise<Idea[]> {
    ideas = [...ideas, {...idea, id: ideas.length + 1, create_date: Date.now()}];
    console.log('Mock api client has been called to add an idea', ideas);
    return ideas;
}

export async function deleteIdea(idea: Idea): Promise<Idea[]> {
    const ideaIndex = ideas.findIndex(i => i.id === idea.id);
    if (ideaIndex === -1) {
        throw Error('not found');
    }

    ideas = [...ideas.slice(0, ideaIndex), ...ideas.slice(ideaIndex + 1)];

    console.log('Mock api client has been called to delete an idea', ideas);
    return ideas;
}

export async function updateIdea(idea: Idea): Promise<Idea[]> {
    const ideaIndex = ideas.findIndex(i => i.id === idea.id);
    if (ideaIndex === -1) {
        throw Error('not found');
    }

    ideas = [...ideas.slice(0, ideaIndex), idea, ...ideas.slice(ideaIndex + 1)];

    console.log('Mock api client has been called to update an idea', ideas);
    return ideas;
}
