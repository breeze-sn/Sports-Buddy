import { db } from './firebaseConfig.js';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";

async function loadEvents(container) {
    container.innerHTML = '<h2>Sports Events</h2>';

    const eventsSnapshot = await getDocs(collection(db, 'events'));
    eventsSnapshot.forEach((eventDoc) => {
        const event = eventDoc.data();
        container.innerHTML += `<div>${event.name}</div>`;
    });
}

export { loadEvents };
import { db } from './firebaseConfig.js';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js';

async function loadEvents(container) {
    container.innerHTML = '<h2>Sports Events</h2>';
    const eventList = document.getElementById('event-list');
    
    const eventsSnapshot = await getDocs(collection(db, 'events'));
    eventsSnapshot.forEach((eventDoc) => {
        const event = eventDoc.data();
        eventList.innerHTML += `<div>
            <span>${event.name}</span>
            <button onclick="deleteEvent('${eventDoc.id}')">Delete</button>
            </div>`;
    });
}

async function addEvent(eventName) {
    try {
        await addDoc(collection(db, 'events'), {
            name: eventName
        });
        console.log('Event added');
    } catch (error) {
        console.error('Error adding event:', error);
    }
}

async function deleteEvent(eventId) {
    try {
        await deleteDoc(doc(db, 'events', eventId));
        console.log('Event deleted');
    } catch (error) {
        console.error('Error deleting event:', error);
    }
}

document.getElementById('add-event').addEventListener('click', () => {
    const eventName = document.getElementById('event-name').value;
    if (eventName) {
        addEvent(eventName);
        document.getElementById('event-name').value = '';
        loadEvents(document.getElementById('event-list'));
    }
});

export { loadEvents, addEvent, deleteEvent };
