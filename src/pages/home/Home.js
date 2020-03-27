import React from 'react';

import Article from '../../components/article/Article';

import list from './list';

import './style.css';
export function countToDo(){
    return list.data.filter(function(item){
        return item.status==="todo";
    }).length;
}
export function countDone(){
    return list.data.filter(function(item){
        return item.status==="done";
    }).length;
}
export default class Home extends React.Component {

    renderList = () => {
        return list.data.map((item, index) => {
            return (
                <Article key={index} status={item.status} text={item.text} />
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                {this.renderList()}
            </React.Fragment>
        );
    };
};