import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

export const rankState = atom({
    key: 'rankState', // unique ID (with respect to other atoms/selectors)
    default: 12980, // default value (aka initial value)
});

export const percentileState = atom({
    key: 'percentileState', // unique ID (with respect to other atoms/selectors)
    default: 37, // default value (aka initial value)
});

export const answerState = atom({
    key: 'answerState', // unique ID (with respect to other atoms/selectors)
    default: 7, // default value (aka initial value)
});

export default function skillState(){
    return (<></>)
}