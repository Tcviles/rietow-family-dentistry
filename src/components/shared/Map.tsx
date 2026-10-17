import { contactInfo } from '../../data/contactInfo';

const query = encodeURIComponent(`${contactInfo.addressLine1}, ${contactInfo.addressLine2}`);

function Map() {
  return (
    <iframe
      title="Map to Rietow Family Dentistry"
      src={`https://www.google.com/maps?q=${query}&output=embed`}
      width="100%"
      height="100%"
      loading="lazy"
      style={{ border: 0 }}
    />
  );
}

export default Map;
