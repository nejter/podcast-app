export interface Podcast {
  id: string;
  title: string;
  author: string;
}

export interface PodcastFeed {
  feed: Feed;
}

export interface Feed {
  author: Author;
  entry: Entry[];
  updated: StringData;
  rights: StringData;
  title: StringData;
  icon: StringData;
  link: Link[];
  id: StringData;
}

export interface Author {
  name: StringData;
  uri: StringData;
}

export interface StringData {
  label: string;
}

export interface Entry {
  'im:name': StringData;
  'im:image': IMImage[];
  summary: StringData;
  'im:price': IMPrice;
  'im:contentType': IMContentType;
  rights?: StringData;
  title: StringData;
  link: Link;
  id: ID;
  'im:artist': IMArtist;
  category: Category;
  'im:releaseDate': IMReleaseDate;
}

export interface Episode {
  trackName: string;
  trackId: number;
  trackTimeMillis: number;
  releaseDate: Date;
  episodeUrl: string;
}

export interface EpisodeApi {
  artworkUrl60: string;
  artistViewUrl: string;
  contentAdvisoryRating: string;
  trackViewUrl: string;
  artworkUrl160: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  previewUrl: string;
  artworkUrl600: string;
  genres: Genre[];
  episodeGuid: string;
  description: string;
  releaseDate: Date;
  trackId: number;
  trackName: string;
  shortDescription: string;
  feedUrl: string;
  episodeContentType: string;
  episodeFileExtension: string;
  artistIds: number[];
  country: string;
  episodeUrl: string;
  collectionViewUrl: string;
  trackTimeMillis?: number;
  kind: string;
  wrapperType: string;
}

export interface Genre {
  name: string;
  id: string;
}

export interface Category {
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  'im:id': string;
  term: PurpleLabel;
  scheme: string;
  label: PurpleLabel;
}

export enum PurpleLabel {
  Music = 'Music',
  MusicCommentary = 'Music Commentary',
  MusicHistory = 'Music History',
  MusicInterviews = 'Music Interviews',
}

export interface ID {
  label: string;
  attributes: IDAttributes;
}

export interface IDAttributes {
  'im:id': string;
}

export interface IMArtist {
  label: string;
  attributes?: IMArtistAttributes;
}

export interface IMArtistAttributes {
  href: string;
}

export interface IMContentType {
  attributes: IMContentTypeAttributes;
}

export interface IMContentTypeAttributes {
  term: FluffyLabel;
  label: FluffyLabel;
}

export enum FluffyLabel {
  Podcast = 'Podcast',
}

export interface IMImage {
  label: string;
  attributes: IMImageAttributes;
}

export interface IMImageAttributes {
  height: string;
}

export interface IMPrice {
  label: IMPriceLabel;
  attributes: IMPriceAttributes;
}

export interface IMPriceAttributes {
  amount: string;
  currency: Currency;
}

export enum Currency {
  Usd = 'USD',
}

export enum IMPriceLabel {
  Get = 'Get',
}

export interface IMReleaseDate {
  label: Date;
  attributes: StringData;
}

export interface Link {
  attributes: LinkAttributes;
}

export interface LinkAttributes {
  rel: Rel;
  type?: Type;
  href: string;
}

export enum Rel {
  Alternate = 'alternate',
  Self = 'self',
}

export enum Type {
  TextHTML = 'text/html',
}
