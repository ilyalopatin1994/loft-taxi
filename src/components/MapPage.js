import React, { Component, createRef } from "react";
import mapboxgl from 'mapbox-gl';
import { AuthContext } from "./Authorization"

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class MapPage extends Component {
  componentDidMount () {
    if (this.context.isLoggedIn) {
      this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9'
      });
    }
  }

  componentWillUnmount () {
    if (this.context.isLoggedIn) {
      this.map.remove();
    }
  }

  render () {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };
    return (
      <div>{this.context.isLoggedIn ? <div data-testid="map" style={style} ref={el => this.mapContainer = el} /> :
        <div data-testid="notAuthorizedMessage">Вы не вошли в систему! Страница доступна только авторизированным пользователям.</div>}
      </div>
    )
      ;
  }
}

MapPage.contextType = AuthContext;

export default MapPage;