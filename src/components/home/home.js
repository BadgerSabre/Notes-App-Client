import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import './home.css'

const Home = () => {
    const [ show, setShow ] = useState(false)
    const [ modalType, setModalType ] = useState(false)
    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => {
        setShow(true)
    }
    const handleTypeNote = () => {
        setModalType(true)
        setShow(true)
    }
    const handleTypeInfo = () => {
        setModalType(false)
        setShow(true)
    }
    return (
        <>
            <div id="wrapper" class="container-fluid banner"/>
            <div id="content">
                <div id="welcome">
                    <h2>Welcome User</h2>
                </div>
                <div id="btns">
                    <button type="button" onClick={handleTypeNote} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Create New Note
                    </button>
                    <button id="btn-info" onClick={handleTypeInfo} type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#infoModal">Get Started</button>
                </div>
                <div id="get-started">
                    <Modal show={show} onHide={handleClose} size='lg'>
                        <Modal.Header closeButton>
                            <Modal.Title>{modalType ? 'Create a new Note' : 'Instructions'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {modalType ? 
                            <>
                                <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Enter Note Title Here" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div class="input-group">
                                        <textarea placeholder="Start Typing Note..." class="form-control" aria-label="With textarea"></textarea>
                                </div>
                            </>
                            :
                            <ul>
                                <li>Click the "Create New Note" button to make a new note.</li>
                                <li>Save your note with the "Save Changes" button.</li>
                                <li>You can delete any previous notes with the corresponding "Delete" buttons in the notes table.</li>
                            </ul>}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            {modalType ? <Button variant="primary" onClick={handleClose}>
                                Save Note
                            </Button> : null}
                        </Modal.Footer>
                    </Modal>
                </div>
                <div id="new-note">
                </div>
                <div id="notes-table">
                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Index</th>
                                <th scope="col">Title</th>
                                <th scope="col">Content</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {data.map(d => {
                                <tr>test</tr>
                            })} */}
                            <tr>
                                <td>1</td>
                                <td>Test Note</td>
                                <td>Test Content</td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Long Test Note</td>
                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Test Note 2</td>
                                <td>Test Content</td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
        
    )
}

export default Home;