// Telebirr API response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// What the client sends to create an order
export interface CreateOrderRequest {
  title: string;
  amount: string;
}

// What the client sends for a mandate order
export interface CreateMandateOrderRequest {
  title: string;
  amount: string;
  contractNo: string;
}

// Fabric token response from Telebirr
export interface FabricTokenResponse {
  token: string;
}

// Pre-order response from Telebirr
export interface PreOrderResponse {
  biz_content: {
    prepay_id: string;
  };
}
