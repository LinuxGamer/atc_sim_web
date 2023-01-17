import React from 'react'

const Map = () => {
  return (
    <div>
      {/* Map visualization code here */}
    </div>
  )
}

const Aircraft = ({ aircraft }) => {
  return (
    <div>
      <p>Aircraft ID: {aircraft.id}</p>
      <p>Coordinates: {aircraft.coordinates}</p>
      <p>Flight Plan: {aircraft.flightPlan}</p>
    </div>
  )
}

const ControlPanel = ({ aircraft, onUpdate }) => {
  return (
    <div>
      <p>Selected aircraft: {aircraft.id}</p>
      <button onClick={() => onUpdate(aircraft, { flightPlan: 'new flight plan' })}>
        Update flight plan
      </button>
    </div>
  )
}

const ATCSimulator = () => {
  const [aircrafts, setAircrafts] = React.useState([
    { id: 'A1', coordinates: '34.5, 45.6', flightPlan: 'flight plan 1' },
    { id: 'A2', coordinates: '12.3, 23.4', flightPlan: 'flight plan 2' },
    { id: 'A3', coordinates: '56.7, 67.8', flightPlan: 'flight plan 3' },
  ])
  const [selectedAircraft, setSelectedAircraft] = React.useState(null)

  const handleUpdate = (aircraft, updates) => {
    const updatedAircrafts = aircrafts.map(a => {
      if (a.id === aircraft.id) {
        return { ...a, ...updates }
      }
      return a
    })
    setAircrafts(updatedAircrafts)
  }

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
  )
}

export default ATCSimulator
