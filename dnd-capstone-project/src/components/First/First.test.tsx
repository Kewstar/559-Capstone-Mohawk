import { First } from "./First";
import { render } from "@testing-library/react";

describe('First tests', () => {
    it('Should render component', () => {
        render(<First />)
        expect(true).toBeTruthy()
    })
})