goog.provide('ol.style.Image');
goog.provide('ol.style.ImageState');


/**
 * @enum {number}
 */
ol.style.ImageState = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3
};


/**
 * @typedef {{opacity: number,
 *            rotateWithView: boolean,
 *            rotation: number,
 *            scale: number,
 *            snapToPixel: boolean}}
 */
ol.style.ImageOptions;



/**
 * @classdesc
 * Abstract base class; used for creating subclasses and not instantiated in
 * apps. Base class for {@link ol.style.Icon} and {@link ol.style.Circle}.
 *
 * @constructor
 * @param {ol.style.ImageOptions} options Options.
 * @api
 */
ol.style.Image = function(options) {

  /**
   * @private
   * @type {number}
   */
  this.opacity_ = options.opacity;

  /**
   * @private
   * @type {boolean}
   */
  this.rotateWithView_ = options.rotateWithView;

  /**
   * @private
   * @type {number}
   */
  this.rotation_ = options.rotation;

  /**
   * @private
   * @type {number}
   */
  this.scale_ = options.scale;

  /**
   * @private
   * @type {boolean}
   */
  this.snapToPixel_ = options.snapToPixel;

};


/**
 * @return {number} Opacity.
 * @api
 */
ol.style.Image.prototype.getOpacity = function() {
  return this.opacity_;
};


/**
 * @return {boolean} Rotate with map.
 * @api
 */
ol.style.Image.prototype.getRotateWithView = function() {
  return this.rotateWithView_;
};


/**
 * @return {number} Rotation.
 * @api
 */
ol.style.Image.prototype.getRotation = function() {
  return this.rotation_;
};


/**
 * @return {number} Scale.
 * @api
 */
ol.style.Image.prototype.getScale = function() {
  return this.scale_;
};


/**
 * @return {boolean} Snap to pixel?
 * @api
 */
ol.style.Image.prototype.getSnapToPixel = function() {
  return this.snapToPixel_;
};


/**
 * @function
 * @return {Array.<number>} Anchor.
 */
ol.style.Image.prototype.getAnchor = goog.abstractMethod;


/**
 * @function
 * @param {number} pixelRatio Pixel ratio.
 * @return {HTMLCanvasElement|HTMLVideoElement|Image} Image element.
 * @api
 */
ol.style.Image.prototype.getImage = goog.abstractMethod;


/**
 * @param {number} pixelRatio Pixel ratio.
 * @return {HTMLCanvasElement|HTMLVideoElement|Image} Image element.
 */
ol.style.Image.prototype.getHitDetectionImage = goog.abstractMethod;


/**
 * @return {ol.style.ImageState} Image state.
 */
ol.style.Image.prototype.getImageState = goog.abstractMethod;


/**
 * @return {ol.Size} Image size.
 */
ol.style.Image.prototype.getImageSize = goog.abstractMethod;


/**
 * @return {ol.Size} Size of the hit-detection image.
 */
ol.style.Image.prototype.getHitDetectionImageSize = goog.abstractMethod;


/**
 * @function
 * @return {Array.<number>} Origin.
 */
ol.style.Image.prototype.getOrigin = goog.abstractMethod;


/**
 * @function
 * @return {Array.<number>} Origin for the hit-detection image.
 */
ol.style.Image.prototype.getHitDetectionOrigin = goog.abstractMethod;


/**
 * @function
 * @return {ol.Size} Size.
 */
ol.style.Image.prototype.getSize = goog.abstractMethod;


/**
 * Set the opacity.
 *
 * @param {number} opacity Opacity.
 */
ol.style.Image.prototype.setOpacity = function(opacity) {
  this.opacity_ = opacity;
};


/**
 * Set whether to rotate the style with the view.
 *
 * @param {boolean} rotateWithView Rotate with map.
 */
ol.style.Image.prototype.setRotateWithView = function(rotateWithView) {
  this.rotateWithView_ = rotateWithView;
};


/**
 * Set the rotation.
 *
 * @param {number} rotation Rotation.
 * @api
 */
ol.style.Image.prototype.setRotation = function(rotation) {
  this.rotation_ = rotation;
};


/**
 * Set the scale.
 *
 * @param {number} scale Scale.
 * @api
 */
ol.style.Image.prototype.setScale = function(scale) {
  this.scale_ = scale;
};


/**
 * Set whether to snap the image to the closest pixel.
 *
 * @param {boolean} snapToPixel Snap to pixel?
 */
ol.style.Image.prototype.setSnapToPixel = function(snapToPixel) {
  this.snapToPixel_ = snapToPixel;
};


/**
 * @param {function(this: T, goog.events.Event)} listener Listener function.
 * @param {T} thisArg Value to use as `this` when executing `listener`.
 * @return {goog.events.Key|undefined} Listener key.
 * @template T
 */
ol.style.Image.prototype.listenImageChange = goog.abstractMethod;


/**
 * Load not yet loaded URI.
 */
ol.style.Image.prototype.load = goog.abstractMethod;


/**
 * @param {function(this: T, goog.events.Event)} listener Listener function.
 * @param {T} thisArg Value to use as `this` when executing `listener`.
 * @template T
 */
ol.style.Image.prototype.unlistenImageChange = goog.abstractMethod;
