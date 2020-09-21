import {types} from './../../actions/types';
import postsReducer from './reducer';

describe('post resducers',()=>{
    it('should return default state',()=>{
        const newState = postsReducer(undefined,[]);
        expect(newState).toEqual(null);
    })
})