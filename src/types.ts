export interface Description {
  htmlBody: string;
}

export interface Record {
  name: string;
  description: Description;
}

export interface FeatureResponse {
  feature: Record;
}

export interface RequirementResponse {
  requirement: Record;
}

export interface PageResponse {
  page: {
    name: string;
    description: Description;
    children: Array<{
      name: string;
      referenceNum: string;
    }>;
    parent?: {
      name: string;
      referenceNum: string;
    };
  };
}

// Regular expressions for validating reference numbers
export const FEATURE_REF_REGEX = /^([A-Z]+)-(\d+)$/;
export const REQUIREMENT_REF_REGEX = /^([A-Z]+)-(\d+)-(\d+)$/;
export const NOTE_REF_REGEX = /^([A-Z]+)-N-(\d+)$/;

export interface SearchNode {
  name: string | null;
  url: string;
  searchableId: string;
  searchableType: string;
}

export interface SearchResponse {
  searchDocuments: {
    nodes: SearchNode[];
    currentPage: number;
    totalCount: number;
    totalPages: number;
    isLastPage: boolean;
  };
}

export interface CreateFeatureRequest {
  name: string;
  description?: string;
  product_id?: string;
  release_id?: string;
  workflow_status_id?: string;
  assigned_to_user_id?: string;
  tags?: string[];
}

export interface CreateFeatureResponse {
  createFeature: {
    feature: {
      id: string;
      reference_num: string;
      name: string;
      description: Description;
      workflow_status?: {
        id: string;
        name: string;
      };
      assigned_to_user?: {
        id: string;
        name: string;
      };
      product?: {
        id: string;
        name: string;
      };
      release?: {
        id: string;
        name: string;
      };
    };
  };
}
