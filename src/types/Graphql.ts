interface GraphQLRequest {
  query: string;
  variables?: Record<string, any>;
}
export type { GraphQLRequest };
