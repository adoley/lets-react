import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AuthorQuiz from "./AuthorQuiz";
import {shuffle,sample} from 'underscore';

const authors=[
    {
        name: 'APJ Abdul Kalam',
        imageUrl: 'images/authors/apj-abdul-kalam.jpg',
        books: ['India 2020: A Vision for the New Millennium',
                'Wings of Fire: An Autobiography',
                'Ignited Minds: Unleashing the Power within India',
                'The Luminous Sparks: A Biography in Verse and Colours'
               ]
    },
    {
        name: 'Atal Bihari Vajpayee',
        imageUrl: 'images/authors/atal-bihari-vajpayee.jpg',
        books: ['Meri Ekyavan Kavitayen',
            'Four decades in parliament',
            'Vicara bindu',
            'Sankalp-Kaal'
        ]
    },
    {
        name: 'Swami Vivekananda',
        imageUrl: 'images/authors/Swami-Vivekananda.jpg',
        books: ['Raja-Yoga',
            'Karma Yoga: the Yoga of Action',
            'Jnana-Yoga',
            'Lectures from Colombo to Almora'
        ]
    },
    {
        name: 'Ruskin Bond',
        imageUrl: 'images/authors/Ruskin-Bond.jpg',
        books: ['The Room on the Roof',
            'The Blue Umbrella',
            'The Night Train at Deoli and Other Stories',
            'Delhi Is Not Far'
        ]
    }
];

function getTurnData(authors){
    const allBooks=authors.reduce(
        function (p,c,i) {
            return p.concat(c.books);
        },[]);
    const fourRandomBooks= shuffle(allBooks).slice(0,4);
    const answer=sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find((author)=>
            author.books.some((title)=>
                title===answer)
        )
    }
}
const state={
    turnData: getTurnData(authors)
};
ReactDOM.render(<AuthorQuiz turnData={state.turnData}/>, document.getElementById('root'));
registerServiceWorker();
