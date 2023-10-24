// YES : 1        // NO : 0  

//Do you want the Solid Boutton?
var Solid_Boutton = 1;

//Do you want the One Framers bouttons?
var OneFramers = 1;

//Do you want the User interface to be big (it takes up more space but faster to use) Or not?
var BigInterface = 0;

// 2d Nulls //
var Keyframes_at_the_very_end = 1;     
var Position = 1;                     
var Position_Separated = 1;
var Rotation = 1;
var Scale = 1;
var Motion_Blur = 1;
var Motion_tile = 1;
var Output_Width = 400;
var Output_Height = 400;

// 3d Nulls //
var Anchor_Point = 1;
var Orientation = 1;
var _3d_Keyframes_at_the_very_end = 1;
var _3dPosition = 1;
var _3dPosition_Separated =1;
var _3d_Motion_Blur = 1;
var _3dScale = 1;
var X_Rotation = 1;
var Y_Rotation = 1;
var Z_Rotation = 1;


//Do you want when you select multiple layers and use the adjustment layer boutton to :
// 1 : create 1 long adj layer trimmed from the beginning of the first layer until the end of the last layer 
// 0 : create multiple adjustment layers
var AdjustmentLayerLong = 1;


// Twixtor Script //
var length_last_keyframe = 0;
var EasyEase = 0;               //Easy ease the keyframes or not

// Twixtor Settings //
var Motion_Vectors = 5;		  //1:None 	    2:Sloppy 		        3:Medium 		4:High		 5:best
var Image_Prep = 2;			  //1:None 	    2:Contrast.Edge Enhance 3:Delinearize (latest twix versions)
var Frame_Interp=2; 		  //1:Nearest 	2:Blend 		        3:Motion Weighted Blend
var Warping =3;			      //1:Inverse 	2:Inverse smart blend 	3:Forward 		4: Forward w/o smart blend
var Main_BG_Sensitivity = 100;



// Rsmb Settings //
var RSMB_ = 1;               // 1: use rsmb     0: don't use rsmb
var rsmb_blurAmt = 0.30;
var rsmb_sensitivity = 100;

var do_not_touch_this = new File($.fileName);
// The user can customize the script however he wants by playing with these variables.
eval("Logic of the script, in JSXBIN. (I didn't include it since this is an open repo and script is not free!")