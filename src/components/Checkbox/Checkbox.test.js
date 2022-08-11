import React from "react";
import Checkbox from './Checkbox';
import {render, screen, fireEvent} from "@testing-library/react";
import renderer from 'react-test-renderer';

let testName1 = "CheckboxTest boundary"
let testName2 = "CheckboxTest functional"


describe("boundary", () => {
  let component;
  let item = { name: 'action', checked: true };

    it(`${testName1} should render component`, () => {
      component = render(<Checkbox item={item} />);
      
      expect(component).toBeTruthy();
      expect(component.container).toBeDefined();
      expect(component.container.querySelector('input[type="checkbox"]')).toBeDefined();
    });

    it(`${testName1} should render checkbox element`, () => {
      component = render(<Checkbox item={item} />);
      
      expect(component.container.querySelector('input[type="checkbox"]')).toBeDefined();
    });


    it(`${testName1} should render checkbox as checked when item has checked property as true`, () => {
      component = render(<Checkbox item={item} />);
      
      const checkbox = component.container.querySelector('input[type="checkbox"]');
      expect(checkbox.checked).toBe(true);

      // expect(component).toBeDefined();
      // expect(component.container).toBeDefined();
      // expect(component.container.querySelector('input[type="checkbox"]')).toBeDefined();

    });

    it(`${testName1} should not render checkbox as checked when item has checked property as false`, () => {
      // let item = { name: 'action', checked: false };
      // render(<Checkbox item={item} />);
      // const checkbox = screen.getByTestId(item.name);
      // expect(checkbox.checked).toBe(false);

      item.checked = false;
      component = render(<Checkbox item={item} />);
      
      const checkbox = component.container.querySelector('input[type="checkbox"]');
      expect(checkbox.checked).toBe(false);
    });

    it(`${testName1} should change the checked property when clicked`, () => {
      // let item = { name: 'action', checked: true };
      component = render(<Checkbox item={item} />);

      const checkbox = component.container.querySelector('input[type="checkbox"]');

      const flagBeforeClick = checkbox.checked;
      fireEvent.click(checkbox);
      const flagAfterClick = checkbox.checked;
      
      expect(typeof flagBeforeClick).toBe("boolean");
      expect(typeof flagAfterClick).toBe("boolean");
      expect(flagBeforeClick).not.toBe(flagAfterClick);
    });

    it(`${testName1} should render checkbox text`, () => {
      component = render(<Checkbox item={item} />);
      // expect(screen.getByText(item.name)).toBeDefined();

      expect(component).toBeDefined();
      expect(component.container).toBeDefined();
      expect(component.container.innerHTML).toContain(item.name);
    });
    
// });




// describe("functional", () => {
//   let component;
//   let item = { name: 'action', checked: true };


    it(`${testName2} should change the checked property when clicked`, () => {
      // let item = { name: 'action', checked: true };
      component = render(<Checkbox item={item} />);

      const checkbox = component.container.querySelector('input[type="checkbox"]');

      const flagBeforeClick = checkbox.checked;
      fireEvent.click(checkbox);
      const flagAfterClick = checkbox.checked;
      
      expect(typeof flagBeforeClick).toBe("boolean");
      expect(typeof flagAfterClick).toBe("boolean");
      expect(flagBeforeClick).not.toBe(flagAfterClick);
    });
    
});
