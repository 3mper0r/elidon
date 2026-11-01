# Challenges artwork

The gallery combines original reel imagery, a licensed photograph of the real
Promenade, and generated illustrative covers. Assets are served locally from
`public/images/challenges/`.

Current card assignments: the city illustration (`promenade.webp`) belongs to
episode 6, Altstadt Sprint. The swimming illustration belongs to episode 1.
Episode 5 uses the real Promenade photograph below. Episodes 2 and 4 use images
from their original reels. Episode 3 retains the temporary canal illustration.

## Location photographs

- `promenade-actual.webp`: **Muenster Promenade 5926.jpg**, photograph by
  **Rüdiger Wölk, Münster**, 5 May 2006. Source:
  <https://commons.wikimedia.org/wiki/File:Muenster_Promenade_5926.jpg>.
  Licensed under **CC BY-SA 2.5**:
  <https://creativecommons.org/licenses/by-sa/2.5/>. Resized to 1000px wide,
  re-encoded as WebP, and cropped by the cover layout. This version of the photo
  remains available under the same license. Credit, source, license, and changes
  are linked from the gallery.
- `beast-sprung-bridge.webp`: original cover from the user-supplied Beast Sprung
  reel, <https://www.instagram.com/reel/DdhBeFTKwNV/>. The layout shows the lower
  bridge area, excluding the cover's baked-in title and play symbol.
- `der-klimmzug-bridge.webp`: still at 1 second from the user-supplied Der Klimmzug
  reel, <https://www.instagram.com/reel/DcrGG50KPyS/>, showing the underside of the
  actual bridge. Re-encoded as WebP; the layout focuses on the bridge and canal.

## Generated illustrations

The remaining artwork was generated with the built-in image generation tool for
the gallery reference. It does not depict the actual episodes. Original generated
PNGs remain in the generation library; original prompts are recorded below.

## Hero

Saved asset: `public/images/challenges/mountain-hero.webp`

Final prompt:

Use case: photorealistic-natural. Asset type: a wide 3:1 cinematic website hero background, pure imagery without any UI. Create a dark emerald alpine mountain landscape at dusk: a rugged dramatic mountain summit rises in the upper-right quadrant, layered distant mountain ridges descend toward the left through mist, realistic slate rock faces and forest-green foothills. The leftmost 40 percent should be nearly black deep green atmospheric negative space so white website copy can be overlaid in code. On the middle-right hillside, a very thin softly luminous pale-lime hiking route winds toward the summit, with a single tiny luminous point on it. Subtle delicate topographic contour lines blend into the lower-right hills, restrained and elegant. Palette is almost-black forest green #041911, dark pine, desaturated sage mist, and a restrained light-lime route. Cinematic real landscape photography and fine landscape texture, no people, no buildings, no text, no numbers, no typography, no logos, no watermarks, no webpage mockup, no panels. Wide composition, panoramic 3:1 aspect ratio, high quality.

## Episode covers

Saved assets: `public/images/challenges/promenade.webp`, `public/images/challenges/canal.webp`, `public/images/challenges/swimming.webp`, `public/images/challenges/cycling.webp`, `public/images/challenges/running.webp`.

Each cover used this full prompt, with its scene inserted below:

> Use case: photorealistic-natural. Asset type: illustrative cinematic website video thumbnail, landscape 16:9. Scene: [scene below] Style: premium natural editorial photography, rich fine detail, muted dark emerald shadows, restrained warm natural highlights, realistic proportions and textures. Composition: horizontal wide image, subject placed toward the right side, usable darker negative space on the left for a title added later in HTML. Constraints: image only, absolutely no text, letters, numbers, timestamps, play buttons, logos, branding, watermarks, borders or interface elements. This is an illustrative placeholder cover, not a photograph of a particular real participant or actual episode.

### promenade

A historic Westphalian German city square inspired by Münster's Prinzipalmarkt at blue hour: steep-gabled stone merchant houses, tall Gothic spires and warmly lit arcades, atmospheric golden sunset reflecting on the paving, a pedestrian endurance-video setting. No close-up people.

### canal

A calm straight canal at sunset in northwest Germany, a paved running and walking towpath receding along the left bank, trees lining the banks, warm orange horizon reflected in still water, dark forest-green foliage, cinematic wide composition. No boats or close-up people.

### swimming

An athletic adult open-water swimmer wearing a dark swim cap and goggles performing freestyle through dark teal lake water, one arm arcing out of the water toward the right side of the frame, crisp realistic splashes, low water-level sports photography, natural late-afternoon light, face not prominent.

### cycling

A mountain biker in a helmet on a genuine mountain bike with wide knobby tires, riding a technical dirt forest trail between tall green trees, dramatic dappled afternoon light, action sports photography, rider and bike occupy the right half of frame, no visible face, dark forest-green shadows.

### running

An athletic adult runner silhouetted in profile jogging toward the right through an open grassy field at sunset, dynamic running stride, warm golden-orange horizon, dark forest-green foreground, runner on the right half of the composition, natural cinematic endurance sports photography.

