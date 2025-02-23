const featureToggles = {
  newFeature: process.env.FEATURE_NEW_FEATURE === "true",
};

module.exports = featureToggles;
