import React from 'react';

class ATCSimulator extends React.Component {
    static async getInitialProps() {
        // Fetch data or perform any other logic here
        const aircrafts = [
            { id: 'A1', coordinates: '34.5, 45.6', flightPlan: 'flight plan 1' },
            { id: 'A2', coordinates: '12.3, 23.4', flightPlan: 'flight plan 2' },
            { id: 'A3', coordinates: '56.7, 67.8', flightPlan: 'flight plan 3' },
        ];

        return { aircrafts }
    }
    render() {
        const { aircrafts } = this.props;
        return (
            <div>
                <Map>
                    {aircrafts.map(aircraft => (
                        <Aircraft key={aircraft.id} aircraft={aircraft} onSelect={setSelectedAircraft} />
                    ))}
                </Map>
                {selectedAircraft && (
                    <ControlPanel
                        aircraft={selectedAircraft}
                        onUpdate={handleUpdate}
                    />
                )}
            </div>
        );
    }
}

export default ATCSimulator;
