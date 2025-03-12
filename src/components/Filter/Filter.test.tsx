import renderer from "react-test-renderer";
import Filter from "./Filter"

describe('Filter Snapshot', () => {  

    it("Matches DOM Snapshot", () => {
        const filterMock = jest.fn()
        const domTree = renderer.create(<Filter setFilter={filterMock}/>).toJSON();
        expect(domTree).toMatchSnapshot();
      });
  
   
  
  });