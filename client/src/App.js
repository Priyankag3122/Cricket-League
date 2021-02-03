import './App.css';
import { useState } from "react";
import Axios from "axios";

import React from 'react'

export default function App() {
  const [country, setCountry] = useState("");
  const [team, setTeam] = useState("");
  const [player, setPlayer] = useState("");
  const [venue, setVenue] = useState("");
  const [matches, setMatch] = useState("");

  const [teamList, setTeamList] = useState([]);


  const addTeam = () => {
    console.log(country);
    Axios.post("http://localhost:3001/create", {
      country: country,
      team: team,
      player: player,
      venue: venue,
      matches: matches
    }).then(() => {
      setTeamList([
        ...teamList,
        {
          country: country,
          team: team,
          player: player,
          venue: venue,
          matches: matches
        },
      ]);
    });
  };

  const getTeam = () => {
    console.log(country);
    Axios.get("http://localhost:3001/teams").then((response) => {
      setTeamList(response.data);
    });
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setTeamList(
        teamList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };


  return (
    <div>
      <nav class="navbar navbar-light bg-dark">
        <a class="navbar-brand"><h2> <span className="badge badge-danger">IPL</span></h2></a>

        <div className="App">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Add Teams
</button>

          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add Teams</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div className="form-group">
                      <label>Country:</label>
                      <input type="text" class="form-control" placeholder="Enter Country" onChange={(e) => { setCountry(e.target.value) }} />
                    </div>
                    <div className="form-group">
                      <label>Team:</label>
                      <input type="text" class="form-control" placeholder="Enter Team Name" onChange={(e) => { setTeam(e.target.value) }} />
                    </div>
                    <div className="form-group">
                      <label>Player:</label>
                      <input type="text" class="form-control" placeholder="Enter Player Name" onChange={(e) => { setPlayer(e.target.value) }} />
                    </div>
                    <div className="form-group">
                      <label>Venue:</label>
                      <input type="text" class="form-control" placeholder="Enter Venue" onChange={(e) => { setVenue(e.target.value) }} />
                    </div>
                    <div className="form-group">
                      <label>Match:</label>
                      <input type="text" class="form-control" placeholder="Enter Match " onChange={(e) => { setMatch(e.target.value) }} />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" onClick={addTeam}>Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="../../images/4.jpg" alt="First slide" />
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../../images/1.jpeg" alt="Second slide" />

          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../../images/2.jpg" alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="teams">
        <button class="btn btn-info" onClick={getTeam}>Display Match Details</button>

        {teamList.map((val, key) => {
          return <div className="team">

            <h3>Country:{val.country}</h3>
            <h3>Team:{val.team}</h3>
            <h3>Player:{val.player}</h3>
            <h3>Venue:{val.venue}</h3>
            <h3>Matches:{val.matches}</h3>


            <button class="btn btn-danger"
              onClick={() => {
                deleteEmployee(val.id);
              }}
            >
              Delete
                </button>
          </div>
        })}
      </div>
      <hr/>
    </div>
   

  )
}

