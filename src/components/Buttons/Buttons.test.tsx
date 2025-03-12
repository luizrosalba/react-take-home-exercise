import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Button from "./Button"

describe('Filter Test', () => {  

    it("Matches DOM Snapshot", () => {
        const filterMock = jest.fn()
        const domTree = render(<Button filter={'All'} title={'Placeholder'} setFilter={filterMock}/>);
        expect(domTree).toMatchSnapshot();
      });
  
      it("Clicking Button should call mock", () => {
        const filterMock = jest.fn()
        render(<Button filter={'All'} title={'Placeholder'} setFilter={filterMock}/>);
        const element = screen.queryByText('Placeholder')
        element?.click(); 
        expect(filterMock).toHaveBeenCalledTimes(1)
      });

  
  });