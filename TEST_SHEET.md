```tsx:
//! !!!!!!
// import { unmountComponentAtNode } from "react-dom";
// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });
// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

//! !!!!!!
// act(() => {
//   // render components
// });
// // make assertions

//! !!!!!!
// import { render, fireEvent } from '../test-utils';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// // import API mocking utilities from Mock Service Worker
// import {rest} from 'msw'
// import {setupServer} from 'msw/node'
// // declare which API requests to mock
// const server = setupServer(
//   // capture "GET /greeting" requests
//   rest.get('/greeting', (req, res, ctx) => {
//     // respond using a mocked JSON body
//     return res(ctx.json({greeting: 'hello there'}))
//   }),
// )
// // establish API mocking before all tests
// beforeAll(() => server.listen())
// // reset any request handlers that are declared as a part of our tests
// // (i.e. for testing one-time error scenarios)
// afterEach(() => server.resetHandlers())
// // clean up once the tests are done
// afterAll(() => server.close())
// test('loads and displays greeting', async () => {
//   render(<Fetch url="/greeting" />)
//   fireEvent.click(screen.getByText('Load Greeting'))
//   await waitFor(() => screen.getByRole('heading'))
//   expect(screen.getByRole('heading')).toHaveTextContent('hello there')
//   expect(screen.getByRole('button')).toBeDisabled()
// })

//! !!!!!!
// test('the data is peanut butter', async () => {
//   await expect(fetchData()).resolves.toBe('peanut butter');
// });

//! !!!!!!
// test('the fetch fails with an error', async () => {
//   await expect(fetchData()).rejects.toMatch('error');
// });

//! !!!!!!
// const myMockFn = jest
//   .fn()
//   .mockReturnValue('default')
//   .mockImplementation(scalar => 42 + scalar)
//   .mockName('add42');

//! !!!!!!
// // The mock function was called at least once
// expect(mockFunc).toHaveBeenCalled();
// expect(mockFunc).toHaveBeenCalledTimes();

//! !!!!!!
// // The mock function was called at least once with the specified args
// expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);

//! !!!!!!
// // The last call to the mock function was called with the specified args
// expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);

//! !!!!!!
// // All calls and the name of the mock is written as a snapshot
// expect(mockFunc).toMatchSnapshot();

//! !!!!!!
// toBeDisabled()
// toBeEnabled()
// toBeEmptyDOMElement()
// toBeInTheDocument()
// toBeInvalid()
// toBeRequired()
// toBeValid()
// toBeVisible()
// toContainElement(getByTestId('ancestor'))
// toHaveReturned()
// toHaveReturnedWith('La Croix');
// toHaveLength(3)
// toHaveLastReturnedWith('asdasd')
// toHaveProperty('kitchen.area');
// toHaveProperty('kitchen.area', 20);
// toBeDefined();
// toBeFalsy();
// toBeTruthy();
// toBeGreaterThan(1);
// toBeGreaterThanOrEqual(2);
// toBeLessThan(3);
// toBeLessThanOrEqual(4);
// toBeInstanceOf(Date);
// toBeNull()
// toBeNaN()
// toContain('text')
// toEqual(object123)
// toMatch(/grapefruit/);
// toMatchObject(desiredHouse);
// toStrictEqual({flavor: 'lemon'});

// const myBeverage = {delicious: true, sour: false};
// expect(myBeverages()).toContainEqual(myBeverage);

//! !!!!!!
// <a
// data-testid="link"
// href="/"
// aria-label="Home page"
// title="A link to start over"
// >Start</a
// >
// .toHaveAccessibleDescription('A link to start over')

//! !!!!!!
// <img data-testid="img-alt" src="" alt="Test alt" />
// expect(getByTestId('img-alt')).toHaveAccessibleName('Test alt')

//! !!!!!!
// <button data-testid="ok-button" type="submit" disabled>ok</button>
// const button = getByTestId('ok-button')
// expect(button).toHaveAttribute('disabled')
// expect(button).toHaveAttribute('type', 'submit')

//! !!!!!!
// <div><input type="text" data-testid="element-to-focus" /></div>
// const input = getByTestId('element-to-focus')
// input.focus()
// expect(input).toHaveFocus()

//! !!!!!!
// <form data-testid="login-form">
//   <input type="text" name="username" value="jane.doe" />
//   <input type="password" name="password" value="12345678" />
//   <input type="checkbox" name="rememberMe" checked />
//   <button type="submit">Sign in</button>
// </form>
// expect(getByTestId('login-form')).toHaveFormValues({
//   username: 'jane.doe',
//   rememberMe: true,
// })

//! !!!!!!
// expect(button).toHaveStyle({display: 'none'})

//! !!!!!!
// <span data-testid="text-content">Text Content</span>
// const element = getByTestId('text-content')
// expect(element).toHaveTextContent('Content')
// expect(element).toHaveTextContent(/^Text Content$/) // to match the whole content
// expect(element).toHaveTextContent(/content$/i) // to use case-insensitive match
// expect(element).not.toHaveTextContent('content')

//! !!!!!!
// expect(textInput).toHaveValue('text')

//! !!!!!!
// .toBeChecked()

//! !!!!!!
// <label for="startTime"> Please enter a start time for the meeting: </label>
// <input
//   id="startTime"
//   type="text"
//   aria-errormessage="msgID"
//   aria-invalid="true"
//   value="11:30 PM"
// />
// <span id="msgID" aria-live="assertive" style="visibility:visible">
//   Invalid time: the time must be between 9:00 AM and 5:00 PM
// </span>
// const timeInput = getByLabel('startTime')

//! !!!!!!
// expect(timeInput).toHaveErrorMessage(
//   'Invalid time: the time must be between 9:00 AM and 5:00 PM',
// )
// expect(timeInput).toHaveErrorMessage(/invalid time/i) // to partially match
// expect(timeInput).toHaveErrorMessage(expect.stringContaining('Invalid time')) // to partially match
// expect(timeInput).not.toHaveErrorMessage('Pikachu!')

//! !!!!!!
// // debug document
// screen.debug()
// // debug single element
// screen.debug(screen.getByText('test'))
// // debug multiple elements
// screen.debug(screen.getAllByText('multi-test'))

//! !!!!!!
// Date.now = jest.fn(() => 1482363367071);

//! !!!!!!
// await expect(Promise.resolve('lemon')).resolves.toBe('lemon');
// return expect(Promise.resolve('lemon')).resolves.toBe('lemon');

// await expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus');
// return expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus');
```
