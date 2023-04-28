import Default from './image/0.png';
import CR90Corvette from './image/2.png';
import StarDestroyer from './image/3.png';
import SentinelClass from './image/5.png';
import DeathStar from './image/9.png';
import MillenniumFalcon from './image/10.png';
import YWing from './image/11.png';
import XWing from './image/12.png';
import TIEAdvanced from './image/13.png';
import Executor from './image/15.png';
import RebelTransport from './image/17.png';
import Slave1 from './image/21.png';
import ImperialShuttle from './image/22.png';
import EF76NebulonB from './image/23.png';
import CalamariCruiser from './image/27.png';
import AWing from './image/28.png';
import BWing from './image/29.png';
import RepublicCruiser from './image/31.png';
import DroidControlShip from './image/32.png';
import NabooFighter from './image/39.png';
import NabooRoyalStarship from './image/40.png';
import Scimitar from './image/41.png';
import JTypeDiplomaticBarge from './image/43.png';
import AA9CoruscantFreighter from './image/47.png';
import JediStarfighter from './image/48.png';
import HTypeNubianYacht from './image/49.png';
import RepublicAssaultShip from './image/52.png';
import SolarSailer from './image/58.png';
import TradeFederationCruiser from './image/59.png';
import ThetaClassshuttle from './image/61.png';
import RepublicAttackCruiser from './image/63.png';
import NabooStarSkiff from './image/64.png';
import JediInterceptor from './image/65.png';
import arc170 from './image/66.png';
import BankingClanFrigte from './image/68.png';
import Belbullab22Starfighter from './image/74.png';
import VWing from './image/75.png';

type StarShipImgCodes = {
  [key: number]: StarShipImgCode;
}

interface StarShipImgCode {
  title: string
  icon: string
}

export const starShipImgCodes: StarShipImgCodes = {
  0: {
    title: 'Default',
    icon: Default
  },

  2: {
    title: 'CR90 corvette',
    icon: CR90Corvette
  },

  3: {
    title: 'Star Destroyer',
    icon: StarDestroyer
  },
  5: {
    title: 'Sentinel-class landing craft',
    icon: SentinelClass
  },
  9: {
    title: 'Death Star',
    icon: DeathStar
  },
  10: {
    title: 'Millennium Falcon',
    icon: MillenniumFalcon
  },
  11: {
    title: 'Y-Wing',
    icon: YWing
  },
  12: {
    title: 'X-wing',
    icon: XWing
  },
  13: {
    title: 'TIE Advanced x1',
    icon: TIEAdvanced
  },
  15: {
    title: 'Executor',
    icon: Executor
  },
  17: {
    title: 'Rebel transport',
    icon: RebelTransport
  },
  21: {
    title: 'Slave 1',
    icon: Slave1
  },
  22: {
    title: 'Imperial shuttle',
    icon: ImperialShuttle
  },
  23: {
    title: 'EF76 Nebulon-B escort frigate',
    icon: EF76NebulonB
  },
  27: {
    title: 'Calamari Cruiser',
    icon: CalamariCruiser
  },
  28: {
    title: 'A-wing',
    icon: AWing
  },
  29: {
    title: 'B-wing',
    icon: BWing
  },
  31: {
    title: 'Republic Cruiser',
    icon: RepublicCruiser
  },
  32: {
    title: 'Droid control ship',
    icon: DroidControlShip
  },
  39: {
    title: 'Naboo fighter',
    icon: NabooFighter
  },
  40: {
    title: 'Naboo Royal Starship',
    icon: NabooRoyalStarship
  },
  41: {
    title: 'Scimitar',
    icon: Scimitar
  },
  43: {
    title: 'J-type diplomatic barge',
    icon: JTypeDiplomaticBarge
  },
  47: {
    title: 'AA-9 Coruscant freighter',
    icon: AA9CoruscantFreighter
  },
  48: {
    title: 'Jedi starfighter',
    icon: JediStarfighter
  },
  49: {
    title: 'H-type Nubian yacht',
    icon: HTypeNubianYacht
  },
  52: {
    title: 'Republic Assault ship',
    icon: RepublicAssaultShip
  },
  58: {
    title: 'Solar Sailer',
    icon: SolarSailer
  },
  59: {
    title: 'Trade Federation cruiser',
    icon: TradeFederationCruiser
  },
  61: {
    title: 'Theta-class T-2c shuttle',
    icon: ThetaClassshuttle
  },
  63: {
    title: 'Republic attack cruiser',
    icon: RepublicAttackCruiser
  },
  64: {
    title: 'Naboo star skiff',
    icon: NabooStarSkiff
  },
  65: {
    title: 'Jedi Interceptor',
    icon: JediInterceptor
  },
  66: {
    title: 'arc-170',
    icon: arc170
  },
  68: {
    title: 'Banking clan frigte',
    icon: BankingClanFrigte
  },
  74: {
    title: 'Belbullab-22 starfighter',
    icon: Belbullab22Starfighter
  },
  75: {
    title: 'V-wing',
    icon: VWing
  }
};
