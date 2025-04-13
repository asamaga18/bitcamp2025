import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Sidebar from '../components/Sidebar';
import './Account.css';
import './Account';

const Account = () => {
    const navigate = useNavigate();
    
    const [location, setLocation] = useState(() => {
        const stored = localStorage.getItem('location');
        return stored ? JSON.parse(stored) : [];
    });
    const [produce, setProduce] = useState(() => {
        const stored = localStorage.getItem('produce');
        return stored ? JSON.parse(stored) : [];
    });
    const [extra1, setExtra1] = useState(() => {
        const stored = localStorage.getItem('extra1');
        return stored ? JSON.parse(stored) : [];
    });
    const [extra2, setExtra2] = useState(() => {
        const stored = localStorage.getItem('extra2');
        return stored ? JSON.parse(stored) : [];
    });
    const [extra3, setExtra3] = useState(() => {
        const stored = localStorage.getItem('extra3');
        return stored ? JSON.parse(stored) : [];
    });
    const [notifications, setNotifications] = useState(() => localStorage.getItem('notifications') || 'all');
    const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'english');
    const [privacy, setPrivacy] = useState(() => localStorage.getItem('privacy') || 'public');

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const locations = [
        { value: 'Washington, DC', label: 'Washington, DC' },
        { value: 'Fairfax, VA', label: 'Fairfax, VA' },
        { value: 'Frederick, MD', label: 'Frederick, MD' },
        { value: 'Rockville, MD', label: 'Rockville, MD' },
        { value: 'Columbia, MD', label: 'Columbia, MD' },
        { value: 'College Park, MD', label: 'College Park, MD' }
    ];

    const produces = [
        { value: 'Tomatoes', label: 'Tomatoes' },
        { value: 'Peppers', label: 'Peppers' },
        { value: 'Lettuce', label: 'Lettuce' },
        { value: 'Celery', label: 'Celery' },
        { value: 'Spinach', label: 'Spinach' },
        { value: 'Broccoli', label: 'Broccoli' },
        { value: 'Cauliflower', label: 'Cauliflower' },
        { value: 'Strawberries', label: 'Strawberries' },
        { value: 'Blueberries', label: 'Blueberries' },
        { value: 'Parsley', label: 'Parsley' },
        { value: 'Squash', label: 'Squash' },
        { value: 'Pumpkin', label: 'Pumpkin' }
    ];

    const extras = [
        { value: 'idk1', label: 'idk1' },
        { value: 'idk2', label: 'idk2' },
        { value: 'idk3', label: 'idk3' },
        { value: 'idk4', label: 'idk4' },
        { value: 'idk5', label: 'idk5' },
        { value: 'idk6', label: 'idk6' }
    ];

    useEffect(() => localStorage.setItem('location', JSON.stringify(location)), [location]);
    useEffect(() => localStorage.setItem('produce', JSON.stringify(produce)), [produce]);
    useEffect(() => localStorage.setItem('extra1', JSON.stringify(extra1)), [extra1]);
    useEffect(() => localStorage.setItem('extra2', JSON.stringify(extra2)), [extra2]);
    useEffect(() => localStorage.setItem('extra3', JSON.stringify(extra3)), [extra3]);
    useEffect(() => localStorage.setItem('notifications', notifications), [notifications]);
    useEffect(() => localStorage.setItem('language', language), [language]);
    useEffect(() => localStorage.setItem('privacy', privacy), [privacy]);

    return (
        <div className="account-page">
            <Sidebar />
            <div className="merged-container">
                <div className="header-container">Account Settings</div>
                <div className="section1">
                    <form>
                        <div className="form-group">
                            <label htmlFor="location">Location:</label>
                            <Select id="location" isMulti options={locations} value={location} onChange={setLocation} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="produce">Produce:</label>
                            <Select id="produce" isMulti options={produces} value={produce} onChange={setProduce} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="extra1">Extra 1:</label>
                            <Select id="extra1" isMulti options={extras} value={extra1} onChange={setExtra1} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="extra2">Extra 2:</label>
                            <Select id="extra2" isMulti options={extras} value={extra2} onChange={setExtra2} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="extra3">Extra 3:</label>
                            <Select id="extra3" isMulti options={extras} value={extra3} onChange={setExtra3} />
                        </div>
                    </form>
                </div>

                <div className="dotted-line"></div>

                <div className="section2">
                    <div className="display-container">
                        <h3>Display:</h3>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="notifications">Notifications:</label>
                            <select id="notifications" value={notifications} onChange={(e) => setNotifications(e.target.value)}>
                                <option value="all">All Notifications</option>
                                <option value="email">Email Only</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="language">Language:</label>
                            <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
                                <option value="english">English</option>
                                <option value="spanish">Spanish</option>
                                <option value="french">French</option>
                                <option value="german">German</option>
                                <option value="mandarin">Mandarin</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="privacy">Privacy Settings:</label>
                            <select id="privacy" value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="button" onClick={handleLogout} className="logOutButton">Log Out</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Account;
