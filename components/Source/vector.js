"use client";
import VectorSource from 'ol/source/Vector';

function vector({ features }) {
	return new VectorSource({
		features
	});
}

export default vector;
