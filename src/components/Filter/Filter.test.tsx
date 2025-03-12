import {render} from '@testing-library/react'
import Filter from "./Filter"

describe('Filter Test', () => {  

    it("Matches DOM Snapshot", () => {
        const filterMock = jest.fn()
        const domTree = render(<Filter setFilter={filterMock}/>);
        expect(domTree).toMatchSnapshot();
      });
  
  
  });