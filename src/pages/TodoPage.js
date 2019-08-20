
import React from 'react';
// import ContactService from '../services/ContactService'

export default class TodoPage extends React.Component {
    state = {
        todos: [
            { txt: 'do that', isDone: false, createdAt: 1519211809934,info:'Lorem Ipsum Bla Bla Bla and bla bla bla and gjdaktp aflamfjek aporeldkajr nfak ama kf rkrk jis  is  eio jsh ' },
            { txt: 'do this', isDone: false, createdAt: 1519211899937,info:'Lorem Ipsum Bla Bla Bla and bla bla bla and gjdaktp aflamfjek aporeldkajr nfak ama kf rkrk jis  is  eio jsh ' },
            { txt: 'learn react', isDone: false, createdAt: 1519251809934,info:'Lorem Ipsum Bla Bla Bla and bla bla bla and gjdaktp aflamfjek aporeldkajr nfak ama kf rkrk jis  is  eio jsh ' },
            { txt: 'learn vue', isDone: false, createdAt: 1519211009934,info:'Lorem Ipsum Bla Bla Bla and bla bla bla and gjdaktp aflamfjek aporeldkajr nfak ama kf rkrk jis  is  eio jsh ' },
        ],
        todoDetails: null,
        currTodoId : null
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
        // MAKE IT EASIER TO READ WITH IDX
        const idx = this.state.currTodoId
        if (this.state.todos[idx]) this.state.todos[idx].isDone  = isDone
        this.setState( {todoDetails : { ...this.state.todoDetails, isDone : isDone }});
        
    }

    

    render() {
        return (
            <section>

                <h1 className="is-2 title text-white"> TODOS </h1>
                <div className="columns container">

                    <div className="column is-one-quarter">


                        <ol>
                            {this.state.todos.map((item, idx) =>
                                <li onClick={() => this.handleShow(idx)}
                                    key={idx}>{item.txt}</li>)}
                        </ol>
                        <button className="button  is-medium is-info"
                            onClick={this.handleAdd}>Add
                        </button>
                    </div>

                    <div className="">
                        {this.state.todoDetails &&
                            <div>

                                <h2 className="subtitle is-4">
                                    {this.state.todoDetails.txt}
                                </h2>
                                <span className="is-small">
                                    {
                                    this.state.todoDetails.createdAt//.toLocaleDateString()
                                    }
                                </span>
                                <hr/>
                                <p className="text-start">
                                    {
                                    this.state.todoDetails.info//.toLocaleDateString()
                                    }
 
                                </p>

                                <input type="checkbox" 
                                onChange={this.handleDoneTodo} 
                                checked={this.state.todoDetails.isDone}/>
                                <span> is done</span>

                            </div>
                        }
                    </div>
                </div>
            </section>
        )


    }
}
