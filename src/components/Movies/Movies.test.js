import React from 'react'
import { shallow } from 'enzyme'
import Movies from './Movies'
import { db } from '../../data-source/movie-db'
import { render, screen, fireEvent, act, queryByAttribute, waitFor } from '@testing-library/react';
import Checkbox from '../Checkbox/Checkbox';

let testName = "MoviesTest boundary"

describe('boundary', () => {
    let component

    beforeEach(() => {
      component = render(<Movies />);
    })

    it(`${testName} should mount movies component`, () => {
      component = shallow(<Movies />)
      expect(component.length).toBe(1)
    })

    it(`${testName} should render all movies`, () => {
      db.movies.forEach(movie=>{
        expect(component.container.innerHTML).toContain(movie.title)
      })
    })
    it(`${testName} should render all titles`, () => {
      expect(component.container.querySelectorAll(`.title`).length).toEqual(db.movies.length);
    })
    it(`${testName} should render all checkboxes`, () => {
      expect(component.container.querySelectorAll(`input[type='checkbox']`).length).toEqual(db.genres.length+db.languages.length);
    })
    it(`${testName} should filter movies when checkbox is clicked`, () => {      
      
      let genre = db.genres[0];
      
      let checkbox = component.container.querySelector(`input[id='${genre.name}']`);
      
      if(!checkbox.checked){
        fireEvent.click(checkbox);
      }
      let cardElement = component.container.querySelectorAll(".Card");
      let genresWithinCard = component.container.querySelectorAll(".Card .genre");
      let movieCardsBeforeUncheck = cardElement.length;
      let genresBeforeUncheck = genresWithinCard.length;

      fireEvent.click(checkbox);

      let movieCardsAfterUncheck = cardElement.length;
      let genresAfterUncheck = genresWithinCard.length;

      expect(movieCardsAfterUncheck).toBeLessThanOrEqual(movieCardsBeforeUncheck);
      expect(genresAfterUncheck).toBeLessThanOrEqual(genresBeforeUncheck);
    })
  })

