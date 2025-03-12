import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import Filter from "./Filter"

describe('Filter Test', () => {  

    it("Matches DOM Snapshot", () => {
        const filterMock = jest.fn()
        const domTree = render(<Filter setFilter={filterMock}/>);
        expect(domTree).toMatchSnapshot();
      });
  
      it("All Button should be on screen", () => {
        const filterMock = jest.fn()
        render(<Filter setFilter={filterMock}/>);
        const element = screen.queryByText('All')
        expect(element).toBeInTheDocument()
      });
      it("Clicking Button should call mock", () => {
        const filterMock = jest.fn()
        render(<Filter setFilter={filterMock}/>);
        const element = screen.queryByText('All')
        element?.click(); 
        expect(filterMock).toHaveBeenCalledTimes(1)
      });

  
  });