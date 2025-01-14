// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=js+dts"
// @generated from file mpataki/go_playground/proto/greeting/v1/greeting_service.proto (package mpataki.go_playground.proto.greeting.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { HelloRequest, HelloResponse } from "./greeting_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * GreetingService provides greeting functionality
 *
 * @generated from service mpataki.go_playground.proto.greeting.v1.GreetingService
 */
export const GreetingService = {
  typeName: "mpataki.go_playground.proto.greeting.v1.GreetingService",
  methods: {
    /**
     * SayHello sends a single greeting
     *
     * @generated from rpc mpataki.go_playground.proto.greeting.v1.GreetingService.SayHello
     */
    sayHello: {
      name: "SayHello",
      I: HelloRequest,
      O: HelloResponse,
      kind: MethodKind.Unary,
    },
  }
};

