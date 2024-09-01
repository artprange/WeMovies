import { render } from '@testing-library/react';
import { LoaderSpinner } from './loader';


describe('Loader', () =>{
    it('should render the spinner as it gathers api data', () =>{
        const wrapper = render(
            <LoaderSpinner/>
        )
     

        wrapper.debug();
    })
})