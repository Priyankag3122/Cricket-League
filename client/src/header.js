import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand"><h2> <span className="badge badge-danger">IPL</span></h2></a>
  <form class="form-inline">
    <button class="btn btn-outline-success my-sm-0" type="submit">Search</button>
  </form>
</nav>
            </div>
        )
    }
}

