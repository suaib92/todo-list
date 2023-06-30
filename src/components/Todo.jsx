import React from "react";

class Todos extends React.Component {
    render() {
        return (
            <form>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control mr-3"
                        placeholder="Add todo"
                    />
                    <div className="input-group-append">
                        <button
                        className="btn btn-success"
                        type="submit"
                        >Add Todo</button>
                    </div>
                </div>
            </form>
        )
    }
}
