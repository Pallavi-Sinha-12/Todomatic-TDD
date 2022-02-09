import React from 'react';
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { shallow } from 'enzyme';
import TodoList from './TodoList';
import { render , screen } from '@testing-library/react';
import mockData from '../../mockData';

Enzyme.configure({ adapter: new Adapter() });

describe("Basic rendering of TodoList", () => {
    it ("Should return TodoList without crashing", () => {
        const todoList = shallow(<TodoList />);
        expect(todoList.exists()).toEqual(true);
    })
})

describe("Testing functionality of TodoList", () => {
    it ("Should display titles of all todos", () => {
        render(<TodoList todos = {mockData}/>);
        mockData.forEach((todo) => {
            expect(screen.getByText(todo.title)).toBeInTheDocument()
        });
    });   
    
});