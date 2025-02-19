import {useEffect, useState} from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
    const [remainingTime, setRemainingTime] = useState(2000);

    useEffect(() => {
        console.log("Remaining Time Interval", remainingTime);
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        };
    }, [])

    useEffect(() => {
        console.log("Remaining Time timer", remainingTime);
        const timer = setTimeout(() => {
            onConfirm();
        }, 2000);

        return () => {
            clearTimeout(timer);
        }

    }, [onConfirm]);

    return (
        <div id="delete-confirmation">
            <h2>Are you sure?</h2>
            <p>Do you really want to remove this place?</p>
            <div id="confirmation-actions">
                <button onClick={onCancel} className="button-text">
                  No
                </button>
                <button onClick={onConfirm} className="button">
                  Yes
                </button>
            </div>
            <progress value={remainingTime} max={2000} />
        </div>
    );
}
