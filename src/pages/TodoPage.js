
import React from 'react';
import '../css/todo.css'
import UtillService from '../services/UtillService'

export default class TodoPage extends React.Component {
    state = {
        todos: [
            { txt: 'do that', isDone: false, createdAt: 1519211809934, info: 'Lorem Ipsum Bla Bla Bla and bla bla bla and gjdaktp aflamfjek aporeldkajr nfak ama kf rkrk jis  is  eio jsh ' },
            { txt: 'do this', isDone: false, createdAt: 1519211899937, info: 'Lorem Ipsum Bla Bla Bla and bla bla bla and gjdaktp aflamfjek aporeldkajr nfak ama kf rkrk jis  is  eio jsh ' },
            { txt: 'learn react', isDone: false, createdAt: 1519251809934, info: 'Lorem Ipsum Bla Bla Bla and bla bla bla and gjdaktp aflamfjek aporeldkajr nfak ama kf rkrk jis  is  eio jsh ' },
            { txt: 'learn vue', isDone: false, createdAt: 1519211009934, info: 'Lorem Ipsum Bla Bla Bla and bla bla bla and gjdaktp aflamfjek aporeldkajr nfak ama kf rkrk jis  is  eio jsh ' },
        ],
        todoDetails: null,
        currTodoId: null
    }

    handleShow = (idx) => {
        // console.log('todo click', this.state.todos[idx])
        const todoDetails = this.state.todos[idx]
        const currTodoId = idx
        this.setState({ todoDetails, currTodoId })
    }

    handleAdd = (e) => {
        console.log('add todo Redirect ...');

    }

    handleDoneTodo = (e) => {
        const isDone = e.target.checked ? true : false
        const todos = this.state.todos
        // MAKE IT EASIER TO READ WITH IDX
        const idx = this.state.currTodoId
        if (this.state.todos[idx]) todos[idx].isDone = isDone
        this.setState({ todoDetails: { ...this.state.todoDetails, isDone: isDone } });
        this.setState({ todos });

    }



    render() {

        return (
            <section className="mar-left-5rem">

                <h1 className="is-2 title text-white"> TODOS </h1>
                <div className="flex container">



                    <ol>
                        {this.state.todos.map((item, idx) =>
                            <li className="is-medium mar-top-halfrem pointer"
                                onClick={() => this.handleShow(idx)}
                                key={idx}>{item.txt}
                            </li>)
                        }
                    </ol>

                    <button className="button prim-bcg is-medium mar-top-3rem text-black"
                        onClick={this.handleAdd}>Add
                        </button>

                    <div className="mar-top-3rem">
                        {this.state.todoDetails &&
                            <div className="todo">

                                <h2 className="subtitle is-4 text-white">
                                    {this.state.todoDetails.txt}
                                    <span className="is-small mar-left-1rem">
                                        {
                                            UtillService.createDateFromStamp(this.state.todoDetails.createdAt)
                                            //this.state.todoDetails.createdAt//.toLocaleDateString()
                                        }
                                    </span>
                                </h2>

                                <hr />
                                <p className="text-start">
                                    {
                                        this.state.todoDetails.info//.toLocaleDateString()
                                    }

                                </p>
                                <div className="mar-top-1rem">

                                    <input type="checkbox"

                                        onChange={this.handleDoneTodo}
                                        checked={this.state.todoDetails.isDone} />
                                    <span> is done</span>
                                </div>

                            </div>
                        }
                    </div>
                </div>
            </section>
        )


    }
}
