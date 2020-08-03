import React, { useState, useEffect } from "react";
import { Segment, Dropdown, Checkbox } from "semantic-ui-react";
import Meal from './Meal';
import { fetchMeals } from '../services/fetchMeals';
import "semantic-ui-css/semantic.min.css";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [mealTypeSelection, setMealTypeSelection] = useState([]);
  const [enabledMealTypeFilters, setEnabledMealTypeFilters] = useState([]);
  const [mealTagsSelection, setMealTagsSelection] = useState([]);
  const [enabledMealTagsFilters, setEnabledMealTagsFilters] = useState([]);

  const mealsWithTags = meals.filter(el => el.tags.length);
  const getMeal = arr => arr.map(el => <Meal key={el.title} value={el.title} meal={el}/>);
  let filteredResults = null;

  useEffect(() => {
    fetchMeals().then(json => setMeals(json));
  }, [])

  useEffect(() => {
    if(enabledMealTypeFilters.length) {
      setMealTypeSelection(
        meals.filter(el => el.mealType.indexOf(enabledMealTypeFilters) > -1)
      )
    }
  }, [meals, enabledMealTypeFilters]);

  const toggleSelectionType = (e, { label, checked }) => {
    if (checked) {
      setEnabledMealTypeFilters([...enabledMealTypeFilters, label])
      setMealTypeSelection(meals.filter(el => el.mealType.indexOf(label) > -1))
    } else {
      setEnabledMealTypeFilters(enabledMealTypeFilters.filter(el => el !== label))
      setMealTypeSelection(meals.filter(el => el !== label));
    }
  };

  const toggleSelectionTags = (e, { label, checked }) => {
    if (checked) {
      setEnabledMealTagsFilters([...enabledMealTagsFilters, label])
      setMealTagsSelection(mealsWithTags.filter(el => el.tags.indexOf(label) > -1))
    } else {
      setEnabledMealTagsFilters(enabledMealTagsFilters.filter(el => el !== label))
      setMealTagsSelection(meals.filter(el => el !== label));
    }
  };

  const mealTypeOptions = Array.from(new Set(meals.map(el => el.mealType)));
  const mealsWithTagsOptions = meals.filter(el => el.tags.length).map(el => el.tags);
  const mealTagsOptions = Array.from(new Set(mealsWithTagsOptions.join().split(',')));


  if(!enabledMealTypeFilters.length && !enabledMealTagsFilters.length) {
    filteredResults = getMeal(meals);
  }
  if(enabledMealTagsFilters.length) {
    if(mealTagsSelection.length) {
      if(mealTagsSelection.every(el => el.tags.includes(...enabledMealTagsFilters))) {
        filteredResults = getMeal(mealTagsSelection);
      }
    }
  }
  if(enabledMealTypeFilters.length) {
    if(mealTypeSelection.length) {
      if(mealTypeSelection.every(el => el.mealType.includes(...enabledMealTypeFilters))) {
        filteredResults = getMeal(mealTypeSelection);
      }
    }
  }
  if(enabledMealTypeFilters.length && enabledMealTagsFilters.length) {
    if(mealTagsSelection.length && mealTypeSelection.length) {
      if(mealTagsSelection.filter(el => el.mealType.includes(mealTypeSelection[0].mealType))) {
        const matches = mealTagsSelection.filter(el => el.mealType.includes(mealTypeSelection[0].mealType));
        filteredResults = getMeal(matches);
      }
    }
  }

  return (
    <>
      <Segment basic>
        <Dropdown item simple text="DIETARY PREFERENCES">
          <Dropdown.Menu>
            {mealTagsOptions.map((el,i) => {
              return (
                <Dropdown.Item key={i}>
                  <Checkbox label={el} onChange={toggleSelectionTags} />
                </Dropdown.Item>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>

        &nbsp;&nbsp;&nbsp;

        <Dropdown item simple text="MEAL TYPE">
          <Dropdown.Menu>
            {mealTypeOptions.map(el => (
              <Dropdown.Item key={el}>
                <Checkbox label={el} onChange={toggleSelectionType} />
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Segment>
      {enabledMealTagsFilters.map(el => {
        return (
          <span key={el} className="filter">
            {el}
          </span>
        );
      })}
      {enabledMealTypeFilters.map(el => {
        return (
          <span key={el} className="filter">
            {el}
          </span>
        );
      })}

      <div className="mealResults">
        {filteredResults}
      </div>
    </>
  );
}
